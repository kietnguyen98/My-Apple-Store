import {
  TVoucher,
  TVoucherCategory,
  TVouchers,
} from "@/app/features/voucher/types";
import { DISCOUNT_TYPES } from "@/app/features/voucher/constants";

const { PERCENTAGE } = DISCOUNT_TYPES;

export function getApplicableVouchersByCategory(
  category: TVoucherCategory,
  totalItemsPrice: number,
  vouchers: TVouchers
) {
  return vouchers
    .filter(voucher => voucher.category.id === category.id)
    .filter(voucher => totalItemsPrice >= voucher.minPriceRequirement);
}

export function getVoucherDiscount(
  totalItemsPrice: number,
  voucher: TVoucher
): number {
  if (voucher.category.discountType === PERCENTAGE) {
    let discountValue = (voucher.discountValue * totalItemsPrice) / 100;
    return discountValue > voucher.maximumDiscount
      ? voucher.maximumDiscount
      : discountValue;
  } else {
    return voucher.discountValue;
  }
}

export function findBestVoucher(
  totalItemsPrice: number,
  voucherList: TVouchers
): TVoucher {
  let sortedVoucher = voucherList.sort(
    (prev, cur) =>
      getVoucherDiscount(totalItemsPrice, cur) -
      getVoucherDiscount(totalItemsPrice, prev)
  );

  return sortedVoucher[0];
}
