import { View, Pressable, PressableProps, Text } from "react-native";

import { styles } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/colors";

type CategoryProps = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

export function Category({
  name,
  iconId,
  isSelected = false,
  ...rest
}: CategoryProps) {
  const Icon = categoriesIcons[iconId]

  return (
    <View>
      <Pressable style={styles.container}>
        <Icon size={16} height={16} color={colors.gray[600]} />
        <Text style={styles.name}>{name}</Text>
      </Pressable>
    </View>
  );
}
