import { ImageBackground, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../../button";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Place } from "../../place";

type Props = {
  uri: string;
}

export function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.icon icon={ArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
}