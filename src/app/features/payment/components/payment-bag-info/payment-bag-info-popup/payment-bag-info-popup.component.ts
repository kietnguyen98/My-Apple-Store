import { Component } from "@angular/core";
import { PaymentService } from "../../../services/payment.service";
import { TCartItems } from "@/app/features/cart/types";
import { TChangeBagItemQuantity } from "../../../types";

@Component({
  selector: "app-payment-bag-info-popup",
  templateUrl: "./payment-bag-info-popup.component.html",
  styleUrls: ["./payment-bag-info-popup.component.css"],
})
export class PaymentBagInfoPopupComponent {
  items: TCartItems = [];
  isChanges: boolean = false;

  constructor(private paymentService: PaymentService) {
    this.paymentService.getPurchasedItems().subscribe(bagItems => {
      this.items = bagItems;
    });
  }

  updateItemQuantity({ itemId, quantity }: TChangeBagItemQuantity) {
    this.items = this.items.map(item =>
      item.id === itemId ? { ...item, quantity: quantity } : item
    );
    this.isChanges = true;
  }

  updateBagItems() {
    this.paymentService.updatePurchasedItems(this.items);
  }
}
