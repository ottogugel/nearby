import { Text, View } from "react-native";
import { styles } from "./styles";
import { LucideProps } from "lucide-react-native";
import { colors } from "@/styles/colors";

type Props = {
  description: string
  icon: React.ComponentType<LucideProps>
}

export function Info({ icon: Icon , description }: Props) {
  return <View style={styles.container}>
    <Icon width={16} height={16} color={colors.gray[400]} />
    <Text style={styles.text}>{description}</Text>
  </View>;
}
