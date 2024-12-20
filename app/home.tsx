import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { Categories, CategoriesProps } from "../components/categories";

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);

  async function fetchCategories() {
    try {
      const {data} = await api.get('/categories')
      setCategories(data)
      console.log(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Categorias", "Não foi possível carregar as categorias")
    }
  }

  useEffect(()=> {
    fetchCategories()
  },[])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Categories data={categories} />
    </View>
  )
}