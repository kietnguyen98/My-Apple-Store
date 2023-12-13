import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { TVoucher, TVoucherCategories, TVouchers } from "../types";
import { voucherCategoriesMockData, vouchersMockData } from "../data";
import { PaymentService } from "../../payment/services/payment.service";
import { cartHelper, voucherHelper } from "@/utilities";
import { VOUCHER_TYPES } from "../../voucher/constants";

const { ITEMS } = VOUCHER_TYPES;
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
  totalItemsPrice: number = 0;
  isAppliedBestVouchers: boolean = false;
  isAppliedBestVouchersSubject = new BehaviorSubject<boolean>(false);
  itemsDiscount: number = 0;
  itemsDiscountSubject = new BehaviorSubject<number>(this.itemsDiscount);

  constructor(private paymentService: PaymentService) {
    this.paymentService.getPurchasedItems().subscribe(data => {
      this.totalItemsPrice = cartHelper.getTotalExactPrice(data);

      this.vouchers = this.vouchers.map(voucher =>
        this.totalItemsPrice >= voucher.minPriceRequirement
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

    this.checkAppliedBestVoucher();
    this.updatePurchaseDiscount();
  }

  getAppliedVouchers(): Observable<TVouchers> {
    return this.appliedVouchersSubject.asObservable();
  }

  checkAppliedBestVoucher() {
    let isAppliedBestVoucherCheck = true;
    this.voucherCategories.forEach(category => {
      const applicableVouchers = voucherHelper.getApplicableVouchersByCategory(
        category,
        this.totalItemsPrice,
        this.vouchers
      );

      if (applicableVouchers.length > 0) {
        const appliedVoucherByCategory = this.appliedVouchers.find(
          voucher => voucher.category.id === category.id
        ) as TVoucher;

        if (
          appliedVoucherByCategory.id !==
          voucherHelper.findBestVoucher(
            this.totalItemsPrice,
            applicableVouchers
          ).id
        ) {
          isAppliedBestVoucherCheck = false;
          return;
        }
      }
    });

    this.isAppliedBestVouchers = isAppliedBestVoucherCheck;
    this.isAppliedBestVouchersSubject.next(this.isAppliedBestVouchers);
  }

  applyDefaultVoucher() {
    let defaultAppliedVoucher: TVouchers = [];
    this.voucherCategories.forEach(category => {
      const applicableVouchers = voucherHelper.getApplicableVouchersByCategory(
        category,
        this.totalItemsPrice,
        this.vouchers
      );

      if (applicableVouchers.length > 0) {
        defaultAppliedVoucher = [
          ...defaultAppliedVoucher,
          voucherHelper.findBestVoucher(
            this.totalItemsPrice,
            applicableVouchers
          ),
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
    this.itemsDiscount = this.appliedVouchers
      .filter(voucher => voucher.category.voucherType === ITEMS)
      .reduce(
        (prev, cur) =>
          prev + voucherHelper.getVoucherDiscount(this.totalItemsPrice, cur),
        0
      );

    this.itemsDiscountSubject.next(this.itemsDiscount);
  }

  getPurchasesDiscount(): Observable<number> {
    return this.itemsDiscountSubject.asObservable();
  }
}
