import { Text, useWindowDimensions } from 'react-native'
import { Place, PlaceProps } from '../place';
import BottomSheet, { BottomSheetFlatList, BottomSheetView } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { styles } from './styles';
import { router } from 'expo-router';


type Props = {
  data: PlaceProps[];
};

export function Places({ data }: Props) {
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = {
    min: 280,
    max: dimensions.height - 120
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={styles.indicator}
      backgroundStyle={styles.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} onPress={() => router.navigate(`/market/${item.id}`)} />}
        contentContainerStyle={styles.container}
        ListHeaderComponent={() => (
          <Text style={styles.title}>Explore places near you</Text>
        )}
        showsVerticalScrollIndicator={false}
      ></BottomSheetFlatList>
    </BottomSheet>
  );
}