import { Text, View } from "react-native";
import { styles } from "./styles";
import { Step } from "../step";

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>

      <Step
        title="Find stores"
        description="See nearby partner locations near you"
      />
      <Step
        title="Activate coupon with QR Code"
        description="Scan the code at the store to use the benefit"
      />
      <Step
        title="Benefit from advantages near you"
        description="Activate coupons wherever you are, in different types of stores"
      />
    </View>
  );
}