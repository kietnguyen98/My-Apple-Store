import { v4 as uuidv4 } from "uuid";
import { TCategories } from "@/types";

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
