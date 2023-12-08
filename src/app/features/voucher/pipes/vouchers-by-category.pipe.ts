import { Pipe, PipeTransform } from "@angular/core";
import { TVoucherCategory, TVouchers } from "../types";

@Pipe({
  name: "vouchersByCategory",
})
export class VouchersByCategoryPipe implements PipeTransform {
  transform(vouchers: TVouchers, category: TVoucherCategory): TVouchers {
    return vouchers
      .filter(voucher => voucher.category.id === category.id)
      .sort((prev, current) => current.discountValue - prev.discountValue);
  }
}
