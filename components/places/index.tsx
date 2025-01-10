import { Text, useWindowDimensions } from 'react-native'
import { Place, PlaceProps } from '../place';
import BottomSheet, { BottomSheetFlatList, BottomSheetView } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { styles } from './styles';


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
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <Place data={item} />}
        contentContainerStyle={styles.container}
        ListHeaderComponent={()=>(
          <Text style={styles.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
        >
        </BottomSheetFlatList>
      </BottomSheet>
  );
}