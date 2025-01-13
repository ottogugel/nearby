import { Text, View } from "react-native";
import { styles } from "./styles";
import { Info } from "../info";
import { MapPin, Phone, Ticket } from "lucide-react-native";

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
};

type Props = {
  data: PropsDetails;
}

export function Details({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
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

        <Info
          icon={MapPin}
          description="Alameda Jaú, 123. Centro, São Paulo - SP"
        />
        <Info icon={Phone} description="+55 (18) 2311-2149" />
      </View>

      <View style={styles.group2}>
        <Text style={styles.title}>Cupons usados</Text>
      </View>
    </View>
  );
}
