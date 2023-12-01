import { productsMockData } from "../../product/data";
import { mockUsersData } from "../../auth/data";
import { TCarts } from "../types";
import { v4 as uuidv4 } from "uuid";

export const mockCartsData: TCarts = [
  {
    user: mockUsersData[0],
    cart: [
      {
        id: uuidv4(),
        product: productsMockData[0],
        quantity: 1,
        selectedColor: productsMockData?.[0].colors?.[0],
        selectedMemory: productsMockData?.[0].memoryCapacities?.[0],
        checked: true,
      },
      {
        id: uuidv4(),
        product: productsMockData[2],
        quantity: 2,
        selectedColor: productsMockData?.[2].colors?.[0],
        selectedMemory: productsMockData?.[2].memoryCapacities?.[0],
        checked: true,
      },
      {
        id: uuidv4(),
        product: productsMockData[4],
        quantity: 3,
        selectedColor: productsMockData?.[4].colors?.[0],
        selectedMemory: productsMockData?.[4].memoryCapacities?.[0],
        checked: true,
      },
    ],
  },
  {
    user: mockUsersData[1],
    cart: [
      {
        id: uuidv4(),
        product: productsMockData[1],
        quantity: 1,
        selectedColor: productsMockData?.[1].colors?.[0],
        selectedMemory: productsMockData?.[1].memoryCapacities?.[0],
        checked: true,
      },
      {
        id: uuidv4(),
        product: productsMockData[3],
        quantity: 2,
        selectedColor: productsMockData?.[3].colors?.[0],
        selectedMemory: productsMockData?.[3].memoryCapacities?.[0],
        checked: true,
      },
      {
        id: uuidv4(),
        product: productsMockData[5],
        quantity: 3,
        selectedColor: productsMockData?.[5].colors?.[0],
        selectedMemory: productsMockData?.[5].memoryCapacities?.[0],
        checked: true,
      },
    ],
  },
];
