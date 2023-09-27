import { TCategories } from "@/app/features/product/types";
import { v4 as uuidv4 } from "uuid";

export const categories: TCategories = [
  {
    id: uuidv4(),
    name: "iPhone",
  },
  {
    id: uuidv4(),
    name: "iPad",
  },
  {
    id: uuidv4(),
    name: "iWatch",
  },
];
