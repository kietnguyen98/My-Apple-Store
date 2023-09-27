export const IS_HOT = "isHot" as const;
export const ON_SALE = "onSale" as const;

export const PRODUCT_STATUS_VALUES = {
  IS_HOT: "isHot",
  ON_SALE: "onSale",
} as const;

export const PRODUCT_STATUS_OPTIONS = [
  { name: "is Hot", value: IS_HOT },
  { name: "is on sale", value: ON_SALE },
] as const;
