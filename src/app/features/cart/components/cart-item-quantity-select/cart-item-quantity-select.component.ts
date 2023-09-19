import { Component, Input } from "@angular/core";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-cart-item-quantity-select",
  templateUrl: "./cart-item-quantity-select.component.html",
  styleUrls: ["./cart-item-quantity-select.component.css"],
})
export class CartItemQuantitySelectComponent {
  @Input() itemId: string = "";
  @Input() quantity: number = 0;

  constructor(private cartService: CartService) {}

  increaseQuantity() {
    this.cartService.changeItemQuantity({
      itemId: this.itemId,
      value: this.quantity + 1,
    });
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.cartService.changeItemQuantity({
        itemId: this.itemId,
        value: this.quantity - 1,
      });
    }
  }
}
