import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator
} from "react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { LucideProps } from "lucide-react-native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
}

function Button({ children, style, isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
    style={[styles.container, style]}
    activeOpacity={0.7}
    disabled={isLoading}
    {...rest}
    >
      {isLoading ? <ActivityIndicator size={"small"} color={colors.gray[100]} /> : children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={styles.title}>{children}</Text>;
}

type IconProps = {
  icon: React.ComponentType<LucideProps>
}

function Icon({icon: Icon}: IconProps) {
  return (
    <Icon size={24} color={colors.gray[100]} />
  )
}


Button.Title = Title;
Button.icon = Icon;

export { Button, Title };
