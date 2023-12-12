import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { TVoucher, TVoucherCategories, TVouchers } from "../types";
import { voucherCategoriesMockData, vouchersMockData } from "../data";
import { PaymentService } from "../../payment/services/payment.service";
import { cartHelper } from "@/utilities";
import { VOUCHER_TYPES, DISCOUNT_TYPES } from "../../voucher/constants";

const { ITEMS } = VOUCHER_TYPES;
const { PERCENTAGE } = DISCOUNT_TYPES;
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
  isAppliedBestVouchers: boolean = false;
  isAppliedBestVouchersSubject = new BehaviorSubject<boolean>(false);
  purchaseDiscount: number = 0;
  purchaseDiscountSubject = new BehaviorSubject<number>(this.purchaseDiscount);

  constructor(private paymentService: PaymentService) {
    this.paymentService.getPurchasedItems().subscribe(data => {
      this.totalProductPrice = cartHelper.getTotalExactPrice(data);

      this.vouchers = this.vouchers.map(voucher =>
        this.totalProductPrice >= voucher.minPriceRequirement
          ? { ...voucher, available: true }
          : { ...voucher, available: false }
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

  getIsAppliedBestVouchers(): Observable<boolean> {
    return this.isAppliedBestVouchersSubject.asObservable();
  }

  applyVoucher(data: TVouchers) {
    this.appliedVouchers = data;
    this.appliedVouchersSubject.next(this.appliedVouchers);

    let isAppliedBestVoucherCheck = true;
    this.voucherCategories.forEach(category => {
      const applicableVouchers = this.vouchers
        .filter(voucher => voucher.category.id === category.id)
        .filter(
          voucher => this.totalProductPrice >= voucher.minPriceRequirement
        )
        .sort((prev, cur) => cur.discountValue - prev.discountValue);

      if (applicableVouchers.length > 0) {
        const appliedVoucherByCategory = this.appliedVouchers.find(
          voucher => voucher.category.id === category.id
        );

        if (
          applicableVouchers.indexOf(appliedVoucherByCategory as TVoucher) !== 0
        ) {
          isAppliedBestVoucherCheck = false;
          return;
        }
      }
    });

    this.isAppliedBestVouchers = isAppliedBestVoucherCheck;
    this.isAppliedBestVouchersSubject.next(this.isAppliedBestVouchers);

    this.updatePurchaseDiscount();
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

      if (applicableVouchers.length > 0) {
        defaultAppliedVoucher = [
          ...defaultAppliedVoucher,
          applicableVouchers[0],
        ];
      }
    });

    this.appliedVouchers = defaultAppliedVoucher;
    this.appliedVouchersSubject.next(this.appliedVouchers);

    this.isAppliedBestVouchers = true;
    this.isAppliedBestVouchersSubject.next(this.isAppliedBestVouchers);

    this.updatePurchaseDiscount();
  }

  updatePurchaseDiscount() {
    this.purchaseDiscount = this.appliedVouchers
      .filter(voucher => voucher.category.voucherType === ITEMS)
      .reduce((prev, cur) => {
        if (cur.category.discountType === PERCENTAGE) {
          let discount = (cur.discountValue * this.totalProductPrice) / 100;
          return discount > cur.maximumDiscount
            ? prev + cur.maximumDiscount
            : discount;
        } else {
          return prev + cur.discountValue;
        }
      }, 0);

    this.purchaseDiscountSubject.next(this.purchaseDiscount);
  }

  getPurchasesDiscount(): Observable<number> {
    return this.purchaseDiscountSubject.asObservable();
  }
}
