import { TCategory } from "./category.type";
import { TColors } from "./color.type";
import { TMemoryCapacities } from "./memory.type";

type TProduct = {
  id: string;
  name: string;
  price: number;
  category: TCategory;
  description: string;
  imageUrl: string;
  memoryCapacities?: TMemoryCapacities;
  colors?: TColors;
  subImageUrls?: Array<string>;
};

type TProducts = Array<TProduct>;

export { TProduct, TProducts };
