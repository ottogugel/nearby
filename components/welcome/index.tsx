import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Welcome to Nearby!</Text>

      <Text style={styles.subtitle}>
        Get advantage coupons to use at {"\n"}
        your favorite stores.
      </Text>
    </View>
  );
}