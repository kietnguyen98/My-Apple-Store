import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TCartItem } from "@/app/features/cart/types";
import { TChangeBagItemQuantity } from "../../../types";

@Component({
  selector: "app-payment-bag-item-card",
  templateUrl: "./payment-bag-item-card.component.html",
  styleUrls: ["./payment-bag-item-card.component.css"],
})
export class PaymentBagItemCardComponent {
  @Input() isEditable: boolean = false;
  @Input() item: TCartItem | undefined;
  @Output() updateItemQuantityEmitter =
    new EventEmitter<TChangeBagItemQuantity>();

  increaseItemQuantity = () => {
    if (this.item)
      this.updateItemQuantityEmitter.next({
        itemId: this.item.id,
        quantity: this.item.quantity + 1,
      });
  };

  decreaseItemQuantity = () => {
    if (this.item && this.item.quantity > 1)
      this.updateItemQuantityEmitter.next({
        itemId: this.item.id,
        quantity: this.item.quantity - 1,
      });
  };
}
