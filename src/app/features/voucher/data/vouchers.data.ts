import { v4 as uuidv4 } from "uuid";
import { TVouchers, TVoucherCategories } from "../types";
import { VOUCHER_TYPES, DISCOUNT_TYPES } from "../constants";

const { SHIPPING, ITEMS } = VOUCHER_TYPES;
const { VALUE, PERCENTAGE } = DISCOUNT_TYPES;

export const voucherCategoriesMockData: TVoucherCategories = [
  {
    id: uuidv4(),
    name: "FreeShip discount",
    voucherType: SHIPPING,
    discountType: VALUE,
    attachable: false,
  },
  {
    id: uuidv4(),
    name: "December discount",
    voucherType: ITEMS,
    discountType: VALUE,
    attachable: false,
  },
  {
    id: uuidv4(),
    name: "December discount",
    voucherType: ITEMS,
    discountType: PERCENTAGE,
    attachable: false,
  },
];

export const vouchersMockData: TVouchers = [
  {
    id: uuidv4(),
    category: voucherCategoriesMockData[0],
    title: "Free Ship 20$ OFF",
    code: "FS20$OFF",
    description:
      "Discount 20$ off on shipping price when min purchased price is 1000$ or more",
    discountValue: 20,
    maximumPriceDiscount: 20,
    minPriceRequirement: 1000,
    applyFromDate: new Date("2023-12-01"),
    applyToDate: new Date("2023-12-30"),
    available: false,
  },
  {
    id: uuidv4(),
    category: voucherCategoriesMockData[0],
    title: "Free Ship 30$ OFF",
    code: "FS30$OFF",
    description:
      "Discount 30$ off on shipping price when min purchased price is 1500$ or more",
    discountValue: 30,
    maximumPriceDiscount: 30,
    minPriceRequirement: 1500,
    applyFromDate: new Date("2023-12-01"),
    applyToDate: new Date("2023-12-30"),
    available: false,
  },
  {
    id: uuidv4(),
    category: voucherCategoriesMockData[0],
    title: "Free Ship 40$ OFF",
    code: "FS40$OFF",
    description:
      "Discount 40$ off on shipping price when min purchased price is 2000$ or more",
    discountValue: 40,
    maximumPriceDiscount: 40,
    minPriceRequirement: 2000,
    applyFromDate: new Date("2023-12-01"),
    applyToDate: new Date("2023-12-30"),
    available: false,
  },
  {
    id: uuidv4(),
    category: voucherCategoriesMockData[1],
    title: "100$ OFF",
    code: "DEC100$OFF",
    description:
      "Discount 100$ off on total price when min purchased price is 1200$ or more",
    discountValue: 100,
    maximumPriceDiscount: 100,
    minPriceRequirement: 1200,
    applyFromDate: new Date("2023-12-01"),
    applyToDate: new Date("2023-12-30"),
    available: false,
  },
  {
    id: uuidv4(),
    category: voucherCategoriesMockData[1],
    title: "200$ OFF",
    code: "DEC200$OFF",
    description:
      "Discount 200$ off on total price when min purchased price is 1800$ or more",
    discountValue: 200,
    maximumPriceDiscount: 200,
    minPriceRequirement: 1800,
    applyFromDate: new Date("2023-12-01"),
    applyToDate: new Date("2023-12-30"),
    available: false,
  },
  {
    id: uuidv4(),
    category: voucherCategoriesMockData[1],
    title: "300$ OFF",
    code: "DEC300$OFF",
    description:
      "Discount 300$ off on total price when min purchased price is 2400$ or more",
    discountValue: 300,
    maximumPriceDiscount: 300,
    minPriceRequirement: 2400,
    applyFromDate: new Date("2023-12-01"),
    applyToDate: new Date("2023-12-30"),
    available: false,
  },
  {
    id: uuidv4(),
    category: voucherCategoriesMockData[2],
    title: "5% OFF",
    code: "DEC5%OFF",
    description:
      "Discount 5% off (maximum 200$) on total price when min purchased price is 2200$ or more",
    discountValue: 5,
    maximumPriceDiscount: 200,
    minPriceRequirement: 2200,
    applyFromDate: new Date("2023-12-01"),
    applyToDate: new Date("2023-12-30"),
    available: false,
  },
  {
    id: uuidv4(),
    category: voucherCategoriesMockData[2],
    title: "10% OFF",
    code: "DEC10%OFF",
    description:
      "Discount 10% off (maximum 300$) on total price when min purchased price is 3200$ or more",
    discountValue: 10,
    maximumPriceDiscount: 300,
    minPriceRequirement: 3200,
    applyFromDate: new Date("2023-12-01"),
    applyToDate: new Date("2023-12-30"),
    available: false,
  },
  {
    id: uuidv4(),
    category: voucherCategoriesMockData[2],
    title: "15% OFF",
    code: "DEC15%OFF",
    description:
      "Discount 15% off (maximum 400$) on total price when min purchased price is 4200$ or more",
    discountValue: 15,
    maximumPriceDiscount: 400,
    minPriceRequirement: 4200,
    applyFromDate: new Date("2023-12-01"),
    applyToDate: new Date("2023-12-30"),
    available: false,
  },
];
