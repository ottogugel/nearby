import { Text, View } from "react-native";
import { styles } from "./styles";
import { Step } from "../step";
import { MapPin, QrCode, Ticket } from "lucide-react-native";

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>See how it works:</Text>

      <Step
        title="Find stores"
        description="See nearby partner locations near you"
        icon={MapPin}
      />
      <Step
        title="Activate coupon with QR Code"
        description="Scan the code at the store to use the benefit"
        icon={QrCode}
      />
      <Step
        title="Benefit from advantages near you"
        description="Activate coupons wherever you are, in different types of stores"
        icon={Ticket}
      />
    </View>
  );
}