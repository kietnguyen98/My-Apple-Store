import { TColors } from "@/app/features/product/types";
import { v4 as uuidv4 } from "uuid";

const iPhone7ColorsMockData: TColors = [
  {
    id: uuidv4(),
    name: "black",
    value: "black",
    code: "#1F2020",
  },
  {
    id: uuidv4(),
    name: "silver",
    value: "silver",
    code: "#E4E4E2",
  },
  {
    id: uuidv4(),
    name: "gold",
    value: "gold",
    code: "#DFCCB7",
  },
  {
    id: uuidv4(),
    name: "rose gold",
    value: "rose gold",
    code: "#E6C7C2",
  },
];

const iPhone14ColorsMockData: TColors = [
  {
    id: uuidv4(),
    name: "black",
    value: "black",
    code: "#4b4845",
  },
  {
    id: uuidv4(),
    name: "silver",
    value: "silver",
    code: "#e2e4e1",
  },
  { id: uuidv4(), name: "gold", value: "gold", code: "#d4c9b1" },
  {
    id: uuidv4(),
    name: "purple",
    value: "purple",
    code: "#5e5566",
  },
];

const iPhone13ProMaxColorsMockData: TColors = [
  {
    id: uuidv4(),
    name: "blue",
    value: "blue",
    code: "#9BB5CE",
  },
  {
    id: uuidv4(),
    name: "graphite",
    value: "graphite",
    code: "#5C5B57",
  },
  { id: uuidv4(), name: "gold", value: "gold", code: "#F9E5C9" },
  {
    id: uuidv4(),
    name: "silver",
    value: "silver",
    code: "#F5F5F0",
  },
  {
    id: uuidv4(),
    name: "green",
    value: "green",
    code: "#505F4E",
  },
];

const iPhone12ProMaxColorsMockData: TColors = [
  {
    id: uuidv4(),
    name: "graphite",
    value: "graphite",
    code: "#4C4A46",
  },
  {
    id: uuidv4(),
    name: "silver",
    value: "silver",
    code: "#F1F2ED",
  },
  { id: uuidv4(), name: "gold", value: "gold", code: "#FEEDD8" },
  {
    id: uuidv4(),
    name: "blue",
    value: "blue",
    code: "#2E4755",
  },
];

const iPhone11ProColorsMockData: TColors = [
  {
    id: uuidv4(),
    name: "green",
    value: "green",
    code: "#4E5851",
  },
  {
    id: uuidv4(),
    name: "silver",
    value: "silver",
    code: "#EBEBE3",
  },
  { id: uuidv4(), name: "gold", value: "gold", code: "#FAD7BD" },
  {
    id: uuidv4(),
    name: "grey",
    value: "grey",
    code: "#535150",
  },
];

const iPhoneXSColorsMockData: TColors = [
  {
    id: uuidv4(),
    name: "black",
    value: "black",
    code: "#1F2020",
  },
  {
    id: uuidv4(),
    name: "silver",
    value: "silver",
    code: "#E4E4E2",
  },
  { id: uuidv4(), name: "gold", value: "gold", code: "#F5DDC5" },
];

const iPhoneSEColorsMockData: TColors = [
  {
    id: uuidv4(),
    name: "silver",
    value: "silver",
    code: "#d0d1d3",
  },
  {
    id: uuidv4(),
    name: "gray",
    value: "gray",
    code: "#95969b",
  },
  { id: uuidv4(), name: "gold", value: "gold", code: "#e7cfb7" },
  { id: uuidv4(), name: "rose", value: "rose", code: "#e8c1bc" },
];

const iPhoneXColorsMockData: TColors = [
  {
    id: uuidv4(),
    name: "silver",
    value: "silver",
    code: "#E4E4E2",
  },
  {
    id: uuidv4(),
    name: "gray",
    value: "gray",
    code: "#25282A",
  },
];

const iPhone8ColorsMockData: TColors = [
  {
    id: uuidv4(),
    name: "silver",
    value: "silver",
    code: "#E4E4E2",
  },
  {
    id: uuidv4(),
    name: "gray",
    value: "gray",
    code: "#25282A",
  },
  {
    id: uuidv4(),
    name: "gold",
    value: "gold",
    code: "#F5DDC5",
  },
];

export {
  iPhone7ColorsMockData,
  iPhone14ColorsMockData,
  iPhone13ProMaxColorsMockData,
  iPhone12ProMaxColorsMockData,
  iPhone11ProColorsMockData,
  iPhoneXSColorsMockData,
  iPhoneSEColorsMockData,
  iPhoneXColorsMockData,
  iPhone8ColorsMockData,
};
