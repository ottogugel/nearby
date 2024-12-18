import { StyleSheet, Text, View } from "react-native";
import { Welcome } from "../components/welcome";
import { Steps } from "../components/steps";

export default function() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />
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