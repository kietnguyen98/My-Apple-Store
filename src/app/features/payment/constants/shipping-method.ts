import { TShippingMethod } from "../types";

export const SHIPPING_METHOD_OPTIONS: Array<TShippingMethod> = [
  {
    title: "Normal delivery",
    description:
      "Regular shipping with moderate average speed, you only pay a reasonable price",
    durationEstimation: "7 - 10 days",
    cost: 25,
    value: 1,
    minDeliveryDays: 7,
    maxDeliveryDays: 10,
  },
  {
    title: "Fast delivery",
    description: "Fast shipping, your item will be delivered quickly",
    durationEstimation: "3 - 5 days",
    cost: 35,
    value: 2,
    minDeliveryDays: 3,
    maxDeliveryDays: 5,
  },
  {
    title: "Express delivery",
    description:
      "Shipping is fast and your item will be delivered almost instantly",
    durationEstimation: "1 - 2 days",
    cost: 55,
    value: 3,
    minDeliveryDays: 0,
    maxDeliveryDays: 0,
  },
];
