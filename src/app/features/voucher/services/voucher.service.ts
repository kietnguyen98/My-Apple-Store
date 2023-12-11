import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { TVoucherCategories, TVouchers } from "../types";
import { voucherCategoriesMockData, vouchersMockData } from "../data";
import { PaymentService } from "../../payment/services/payment.service";
import { cartHelper } from "@/utilities";

@Injectable({
  providedIn: "root",
})
export class VoucherService {
  appliedVouchers: TVouchers = [];
  appliedVouchersSubject = new BehaviorSubject<TVouchers>(this.appliedVouchers);
  vouchers: TVouchers = vouchersMockData;
  vouchersSubject = new BehaviorSubject<TVouchers>(this.vouchers);
  voucherCategories: TVoucherCategories = voucherCategoriesMockData;
  voucherCategoriesSubject = new BehaviorSubject<TVoucherCategories>(
    this.voucherCategories
  );
  totalProductPrice: number = 0;

  constructor(private paymentService: PaymentService) {
    this.paymentService.getPurchasedItems().subscribe(data => {
      this.totalProductPrice = cartHelper.getTotalExactPrice(data);

      this.vouchers = this.vouchers.map(voucher =>
        this.totalProductPrice >= voucher.minPriceRequirement
          ? { ...voucher, available: true }
          : voucher
      );
      this.vouchersSubject.next(this.vouchers);

      this.applyDefaultVoucher();
    });
  }

  updateVouchers(newData: TVouchers) {
    this.vouchers = newData;
    this.vouchersSubject.next(this.vouchers);
  }

  getVouchers(): Observable<TVouchers> {
    return this.vouchersSubject.asObservable();
  }

  updateVoucherCategories(newData: TVoucherCategories) {
    this.voucherCategories = newData;
    this.voucherCategoriesSubject.next(this.voucherCategories);
  }

  getVoucherCategories(): Observable<TVoucherCategories> {
    return this.voucherCategoriesSubject.asObservable();
  }

  applyVoucher(data: TVouchers) {
    this.appliedVouchers = data;
    this.appliedVouchersSubject.next(this.appliedVouchers);
  }

  getAppliedVouchers(): Observable<TVouchers> {
    return this.appliedVouchersSubject.asObservable();
  }

  applyDefaultVoucher() {
    let defaultAppliedVoucher: TVouchers = [];
    this.voucherCategories.forEach(category => {
      const applicableVouchers = this.vouchers
        .filter(voucher => voucher.category.id === category.id)
        .filter(
          voucher => this.totalProductPrice >= voucher.minPriceRequirement
        )
        .sort((prev, cur) => cur.discountValue - prev.discountValue);

      defaultAppliedVoucher = [...defaultAppliedVoucher, applicableVouchers[0]];
    });

    this.appliedVouchers = defaultAppliedVoucher;
    this.appliedVouchersSubject.next(this.appliedVouchers);
  }
}
