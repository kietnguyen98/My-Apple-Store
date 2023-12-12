import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PaymentVouchersListPopupComponent } from "./payment-vouchers-list-popup/payment-vouchers-list-popup.component";
import { VoucherService } from "@/app/features/voucher/services/voucher.service";
import { TVouchers } from "@/app/features/voucher/types";

@Component({
  selector: "app-payment-vouchers-info",
  templateUrl: "./payment-vouchers-info.component.html",
  styleUrls: ["./payment-vouchers-info.component.css"],
})
export class PaymentVouchersInfoComponent {
  appliedVouchers: TVouchers = [];
  isAppliedBestVouchers: boolean = false;

  constructor(
    private dialog: MatDialog,
    private voucherService: VoucherService
  ) {
    this.voucherService.getAppliedVouchers().subscribe(data => {
      this.appliedVouchers = data;
    });

    this.voucherService
      .getIsAppliedBestVouchers()
      .subscribe(data => (this.isAppliedBestVouchers = data));
  }

  openDialog() {
    this.dialog.open(PaymentVouchersListPopupComponent);
  }
}
