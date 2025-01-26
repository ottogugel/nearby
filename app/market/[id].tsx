import { api } from "@/services/api";
import { Redirect, router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Alert, Modal, ScrollView, View } from "react-native";
import { Loading } from "../../components/loading";
import { Cover } from "../../components/market/cover";
import { Details, PropsDetails } from "../../components/market/details";
import { Coupon } from "../../components/market/coupon";
import { Button } from "../../components/button";
import { MapPin, ScanLineIcon } from "lucide-react-native";
import { CameraView, useCameraPermissions } from "expo-camera";


type DataProps = PropsDetails & {
  cover: string,
  id: string
}

export default function Market() {
  const [data, setData] = useState<DataProps>()
  const [coupon, setCoupon] = useState<string | null>('null')
  const [couponIsFetching, setCouponsIsFetching] = useState(false)
  const [isVisibleCameraModal, setIsVisibleCameraModal] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(true)

  const [_, requestPermission] = useCameraPermissions()


  const params = useLocalSearchParams<{id: string}>()

  const qrLock = useRef(false)


  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${params.id}`)
      setData(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível carregar os dados", [
        {text: "OK", onPress: () => router.back() },
      ]);
    }finally{
      setIsLoading(false)
    }
  }

  async function handleOpenCamera() {
    try{
      const {granted} = await requestPermission()

      if(!granted) {
        Alert.alert("Câmera", "Você precisa habilitar o uso da câmera");
      }
      setIsVisibleCameraModal(true)
      qrLock.current = false
    } catch (error){
      console.log(error)
      Alert.alert("Câmera", "Não foi possível utilizar a câmera");
    }
  }

  async function getCoupon(id: string) {
    try {
      setCouponsIsFetching(true)

      const { data } = await api.get(`/coupons/${id}`)

      Alert.alert('Cupom', data.coupon)
      setCoupon(data.coupon)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível utilizar o cupom")
    }finally{
      setCouponsIsFetching(false)
    }
  }

  function handleUseCoupon(id: string) {
    setIsVisibleCameraModal(false)
    Alert.alert(
      "Cupom",
      "Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?",
      [
        { text: "Sim", onPress: () => getCoupon(id) },
        { style: "cancel", text: "Não" },
      ]
    );
  }

  useEffect(() => {
    fetchMarket();
  }, [params.id, coupon]);

  if(isLoading) {
    return <Loading />
  }

  if(!data){
    return <Redirect href='/home' />
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={data.cover} />

        <Details data={data} />

        {coupon && <Coupon code="FM4123T42" />}
      </ScrollView>

      <View
        style={{
          padding: 32,
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
          gap: 12,
        }}
      >
        <Button
        style={{ width: 60 }}
        onPress={() => router.push({
          pathname: '/location',
          params: { id: data.id}
        })}>
          <Button.icon icon={MapPin} />
        </Button>

        <Button onPress={handleOpenCamera} style={{ width: 255 }}>
          <Button.icon icon={ScanLineIcon} />
          <Button.Title>Scan QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true;
              setTimeout(() => handleUseCoupon(data), 500);
            }
          }}
        />
        <View style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
          <Button
            onPress={() => setIsVisibleCameraModal(false)}
            isLoading={couponIsFetching}
          >
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  );
}
