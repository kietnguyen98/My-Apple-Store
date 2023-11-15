import { PRODUCT_STATUS_VALUES } from "@/app/share/constants";

export type TProductStatusValues =
  (typeof PRODUCT_STATUS_VALUES)[keyof typeof PRODUCT_STATUS_VALUES];
