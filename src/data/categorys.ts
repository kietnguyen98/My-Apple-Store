import { v4 as uuidv4 } from "uuid";

export interface ICategory {
  id: string;
  name: string;
}

export const categories: Array<ICategory> = [
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
