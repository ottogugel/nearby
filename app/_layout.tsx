import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold
} from '@expo-google-fonts/rubik';

import { colors } from "@/styles/colors";
import { Loading } from "../components/loading";



export default function Layout() {

  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  if(!fontsLoaded){
    return <Loading />
  }

  return (
    <GestureHandlerRootView style={{flex: 1,}}>
    <StatusBar style="dark" />
  <Stack
  screenOptions
  ={{ headerShown: false, contentStyle:
    { backgroundColor: colors.gray[100]
    }}}
  />
  </GestureHandlerRootView>
  )
}