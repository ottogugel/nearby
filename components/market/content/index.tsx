import { Linking, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MapPin, Phone, Ticket } from "lucide-react-native";
import { colors } from "@/styles/colors";
import React from "react";

export type ContentDetails = {
  name: string;
  address: string;
  phone: string;
  coupons: string;
  id: string;
};

type Props = {
  data: ContentDetails | undefined;
};

export function Content({ data }: Props) {
  const handlePhonePress = () => {
    Linking.openURL("tel:+551823112149");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data?.name}</Text>
        <View style={styles.ticket}>
          <Ticket size={16} color="red" />
          <Text style={styles.ticketText}>{data?.coupons}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsText}>
          <MapPin size={16} color={colors.gray[500]} /> {data?.address}
        </Text>
        <TouchableOpacity onPress={handlePhonePress}>
          <Text style={styles.detailsText}>
            <Phone size={16} color={colors.gray[500]} /> {data?.phone}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
