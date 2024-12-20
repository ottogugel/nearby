import { FlatList, View } from "react-native";
import { Category } from "../category";

export type CategoriesProps = {
  id: string;
  name: string;
}[];

type Props = {
  data: CategoriesProps;
}
export function Categories({ data }: Props) {
  console.log(data)
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Category name={item.name} iconId={item.id} />}
      />
    </View>
  );
}