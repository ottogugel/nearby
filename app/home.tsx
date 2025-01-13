import { useEffect, useRef, useState } from "react";
import { Alert, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

import { api } from "@/services/api";
import { Categories, CategoriesProps } from "../components/categories";
import { PlaceProps } from "../components/place";
import { Places } from "../components/places";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { router } from "expo-router";

type MarketProps = PlaceProps & {
  latitude: number,
  longitude: number,
};

const currentLocation = {
  latitude: -23.561413485099372,
  longitude: -46.65605442095263
}

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState("");
  const [markets, setMarkets] = useState<MarketProps[]>([]);
  const ref = useRef<MapView>(null);

  // Busca as categorias
  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0]?.id); // Define a primeira categoria como padrão
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias");
    }
  }

  // Busca os mercados da categoria selecionada
  async function fetchMarkets() {
    try {
      if (!category) {
        return;
      }
      const { data } = await api.get(`/markets/category/${category}`);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possível carregar os locais");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);

  useEffect(() => {
    if (ref.current) {
      ref.current.animateCamera({
        center: {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        },
        zoom: 15,
      })
    }
  })

  return (
    <View style={{ flex: 1, backgroundColor: "#cecece" }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        ref={ref}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("@/assets/location.png")}
        />

        {markets.map((item) => (
          <Marker
            key={item.id}
            identifier="current"
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={require("@/assets/pin.png")}
          >
            <Callout tooltip={true} onPress={() => router.navigate(`/market/${item.id}`)}>
              <View>
                <Text
                style={{
                  fontSize: 14,
                  color: colors.gray[100],
                  fontFamily: fontFamily.medium }}>
                  {item.name}
                </Text>
                <Text
                style={{
                  fontSize: 14,
                  color: colors.gray[200],
                  fontFamily: fontFamily.regular }}>
                  {item.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Places data={markets} />
    </View>
  );
}
