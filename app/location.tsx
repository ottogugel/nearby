import { Alert, Linking, Text, TouchableOpacity, View } from "react-native";
import { ArrowLeft, MapPin, Phone, Ticket } from "lucide-react-native";
import { router } from "expo-router";
import { Button } from "../components/button";
import MapView from "react-native-maps";
import { useEffect, useRef, useState } from "react";
import { colors } from "@/styles/colors";
import { useSearchParams } from "expo-router/build/hooks";
import { api } from "@/services/api";
import { PropsDetails } from "../components/market/details";
import { Content, ContentDetails } from "../components/market/content";

const currentLocation = {
  latitude: -23.561413485099372,
  longitude: -46.65605442095263,
};

type DataProps = ContentDetails & {
  address: string;
  phone: string;
  name: string;
  id: string;
};


export default function Location() {

  const [data, setData] = useState<DataProps>()
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const ref = useRef<MapView>(null);

  async function getStoreData() {
    try {
      const { data } = await api.get(`/markets/${id}`)
      setData(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível carregar os dados", [
        {text: "OK", onPress: () => router.back() },
      ]);
    }
  }
  // Pegar informações das lojas
  useEffect(() => {
    getStoreData()
  })
  // Pegar a localização da loja e definir no mapa.
  useEffect(() => {
    if (ref.current) {
      ref.current.animateCamera({
        center: {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        }
      });
    }
  });


  return (
    <View style={{ flex: 1, backgroundColor: "#cecece" }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        ref={ref}
      />
      <Button
        style={{
          position: "absolute",
          width: 40,
          height: 40,
          marginTop: 40,
          marginLeft: 21,
        }}
        onPress={() => router.back()}
      >
        <Button.icon icon={ArrowLeft} />
      </Button>

      <Content data={data} />

    </View>
  );
}