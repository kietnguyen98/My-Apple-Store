import { Component } from "@angular/core";
import { VoucherService } from "@/app/features/voucher/services/voucher.service";
import {
  TVoucher,
  TVoucherCategories,
  TVouchers,
} from "@/app/features/voucher/types";
import { MatRadioChange } from "@angular/material/radio";

@Component({
  selector: "app-payment-vouchers-list-popup",
  templateUrl: "./payment-vouchers-list-popup.component.html",
  styleUrls: ["./payment-vouchers-list-popup.component.css"],
})
export class PaymentVouchersListPopupComponent {
  voucherCategories: TVoucherCategories = [];
  vouchers: TVouchers = [];
  currentSelectedVouchers: TVouchers = [];

  constructor(private voucherService: VoucherService) {
    this.voucherService.getVouchers().subscribe(data => (this.vouchers = data));
    this.voucherService
      .getVoucherCategories()
      .subscribe(data => (this.voucherCategories = data));
    this.voucherService
      .getAppliedVouchers()
      .subscribe(data => (this.currentSelectedVouchers = data));
  }

  selectVoucher(change: MatRadioChange) {
    let newSelectedVoucher = this.vouchers.find(
      voucher => voucher.id === change.value
    ) as TVoucher;
    if (
      this.currentSelectedVouchers.find(
        voucher => voucher.category.id === newSelectedVoucher.category.id
      )
    ) {
      this.currentSelectedVouchers = this.currentSelectedVouchers.map(
        voucher =>
          voucher.category.id === newSelectedVoucher.category.id
            ? newSelectedVoucher
            : voucher
      );
    } else {
      this.currentSelectedVouchers.push(newSelectedVoucher);
    }
  }

  applyVouchers() {
    this.voucherService.applyVoucher(this.currentSelectedVouchers);
  }
}
