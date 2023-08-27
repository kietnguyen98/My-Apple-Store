import { TProduct } from "./product.type";
import { TColor } from "./color.type";
import { TMemoryCapacity } from "./memory.type";

export type TCartItem = {
  id: string;
  product: TProduct;
  quantity: number;
  selectedColor?: TColor;
  selectedMemory?: TMemoryCapacity;
};

export type TCartItems = Array<TCartItem>;
