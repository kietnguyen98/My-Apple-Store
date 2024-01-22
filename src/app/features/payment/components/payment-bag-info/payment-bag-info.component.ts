import { TCartItems } from "@/app/features/cart/types";
import { Component } from "@angular/core";
import { PaymentService } from "../../services/payment.service";
import { MatDialog } from "@angular/material/dialog";
import { PaymentBagInfoPopupComponent } from "./payment-bag-info-popup/payment-bag-info-popup.component";
@Component({
  selector: "app-payment-bag-info",
  templateUrl: "./payment-bag-info.component.html",
  styleUrls: ["./payment-bag-info.component.css"],
})
export class PaymentBagInfoComponent {
  items: TCartItems = [];

  constructor(
    private paymentService: PaymentService,
    private dialog: MatDialog
  ) {
    this.paymentService.getPurchasedItems().subscribe(bagItems => {
      this.items = bagItems;
    });
  }

  openEditBagPopup() {
    this.dialog.open(PaymentBagInfoPopupComponent);
  }
}
