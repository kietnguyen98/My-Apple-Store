import { PRODUCT_STATUS_VALUES } from "@/constants";

export type TProductStatusValues =
  (typeof PRODUCT_STATUS_VALUES)[keyof typeof PRODUCT_STATUS_VALUES];
