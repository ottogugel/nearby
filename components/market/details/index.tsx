import { Text, View } from "react-native";
import { AlertCircle, MapPin, Phone, Ticket } from "lucide-react-native";

import { styles } from "./styles";
import { Info } from "../info";
import { categoriesIcons } from "@/utils/categories-icons";

export type PropsDetails = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: string;
  rules: {
    id: string;
    description: string;
  }[];
  categoryId: string;
};

type Props = {
  data: PropsDetails;
}

export function Details({ data }: Props) {

  const Icon = categoriesIcons[data.categoryId];

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {data.name}{" "}
        {Icon && <Icon size={20} color="#4CAF50" />}
      </Text>

      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.group}>
        <Info
          icon={Ticket}
          description={`${data.coupons} cupons disponíveis`}
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.title}>Regulamento</Text>

        {data.rules.map((item) => (
          <Text key={item.id} style={styles.rule}>
            {`\u2022 ${item.description}`}
          </Text>
        ))}
      </View>

      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>

        <Info icon={MapPin} description={data.address} />
        <Info icon={Phone} description={data.phone} />
      </View>

      <View style={styles.group2}>
        <Text style={styles.title}>Cupons usados</Text>
      </View>
    </View>
  );
}
