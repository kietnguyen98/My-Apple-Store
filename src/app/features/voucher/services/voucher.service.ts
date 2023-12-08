import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { TVoucher, TVoucherCategories, TVouchers } from "../types";
import { voucherCategoriesMockData, vouchersMockData } from "../data";

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

  constructor() {}

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
}
