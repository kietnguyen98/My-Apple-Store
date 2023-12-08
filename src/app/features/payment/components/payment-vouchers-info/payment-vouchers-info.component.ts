import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PaymentVouchersListPopupComponent } from "./payment-vouchers-list-popup/payment-vouchers-list-popup.component";

@Component({
  selector: "app-payment-vouchers-info",
  templateUrl: "./payment-vouchers-info.component.html",
  styleUrls: ["./payment-vouchers-info.component.css"],
})
export class PaymentVouchersInfoComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PaymentVouchersListPopupComponent);
  }
}
