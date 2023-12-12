import { VOUCHER_TYPES, DISCOUNT_TYPES } from "../constants";

export type TVoucherType = (typeof VOUCHER_TYPES)[keyof typeof VOUCHER_TYPES];
export type TDiscountType =
  (typeof DISCOUNT_TYPES)[keyof typeof DISCOUNT_TYPES];

export type TVoucherCategory = {
  id: string;
  name: string;
  voucherType: TVoucherType;
  discountType: TDiscountType;
  attachable: boolean;
};

export type TVoucherCategories = Array<TVoucherCategory>;

export type TVoucher = {
  id: string;
  category: TVoucherCategory;
  title: string;
  code: string;
  description: string;
  discountValue: number;
  maximumDiscount: number;
  minPriceRequirement: number;
  applyFromDate: Date;
  applyToDate: Date;
  available: boolean;
};

export type TVouchers = Array<TVoucher>;
