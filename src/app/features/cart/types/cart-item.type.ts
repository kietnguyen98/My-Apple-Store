import { TProduct, TColor, TMemoryCapacity } from "../../product/types";

export type TCartItem = {
  id: string;
  product: TProduct;
  quantity: number;
  selectedColor?: TColor;
  selectedMemory?: TMemoryCapacity;
  checked: boolean;
};

export type TCartItems = Array<TCartItem>;
