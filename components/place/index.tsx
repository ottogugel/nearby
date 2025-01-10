import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Ticket } from "lucide-react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  cupons: number;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

export function Place({ data, ...rest}: Props) {
    return (
      <View>
        <TouchableOpacity style={styles.container} {...rest}>
          <Image style={styles.image} source={{ uri: data.cover }} />

          <View style={styles.content}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.description}>{data.description}</Text>

            <View style={styles.footer}>
              <Ticket width={10} height={10} color={colors.red.base} />
              <Text style={styles.tickets}>{data.cupons} coupons available</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
}
