import { TCategories } from "@/app/features/product/types";
import { v4 as uuidv4 } from "uuid";
import { CATEGORY_VALUES } from "@/app/share/constants";

export const categoriesMockData: TCategories = [
  {
    id: uuidv4(),
    name: CATEGORY_VALUES.IPHONE,
  },
  {
    id: uuidv4(),
    name: CATEGORY_VALUES.IPAD,
  },
  {
    id: uuidv4(),
    name: CATEGORY_VALUES.IWATCH,
  },
];
