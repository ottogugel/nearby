import { StyleSheet, Text, View } from "react-native";
import { Welcome } from "../components/welcome";
import { Steps } from "../components/steps";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />
      <Button onPress={() => router.navigate('/home')}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 40
  },
});