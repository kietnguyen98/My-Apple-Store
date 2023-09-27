import { TMemoryCapacities } from "@/app/features/product/types";
import { v4 as uuidv4 } from "uuid";

export const memoryCapacities: TMemoryCapacities = [
  {
    id: uuidv4(),
    name: "64 GB",
    plusPrice: 0,
    value: 64,
  },
  {
    id: uuidv4(),
    name: "128 GB",
    plusPrice: 50,
    value: 128,
  },
  {
    id: uuidv4(),
    name: "256 GB",
    plusPrice: 100,
    value: 256,
  },
  {
    id: uuidv4(),
    name: "512 GB",
    plusPrice: 150,
    value: 512,
  },
  {
    id: uuidv4(),
    name: "1 TB",
    plusPrice: 250,
    value: 1024,
  },
];
