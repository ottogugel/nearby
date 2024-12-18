import { View, ActivityIndicator } from "react-native";
import { colors } from "@/styles/colors";
export function Loading() {
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: 'center', backgroundColor: colors.green["light"] }}>
      <ActivityIndicator color={colors.green["soft"]} />
    </View>
  );
}
