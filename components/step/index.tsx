import { Text, View } from "react-native";
import { styles } from "./styles";

interface StepProps{
  title: string;
  description: string;
}

export function Step({ title, description}: StepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
}