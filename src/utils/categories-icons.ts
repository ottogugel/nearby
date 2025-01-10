import {
  CakeSlice,
  Clapperboard,
  Hotel,
  LucideProps,
  ShoppingBasket,
  Utensils,
} from "lucide-react-native";

export const categoriesIcons: Record<
  string,
  React.ComponentType<LucideProps>
> = {
  "146b1a88-b3d3-4232-8b8f-c1f006f1e86d": Utensils,
  "52e81585-f71a-44cd-8bd0-49771e45da44": ShoppingBasket,
  "57d6e5ff-35f6-4d21-a521-84f23d511d25": Hotel,
  "826910d4-187d-4c15-88f4-382b7e056739": Clapperboard,
  "abce52cf-b33b-4b3c-8972-eb72c66c83e4": CakeSlice,
};