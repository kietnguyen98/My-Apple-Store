import { Component } from "@angular/core";
import { CartService } from "../../service/cart.service";
import { TCartItems } from "@/types";

@Component({
  selector: "app-cart-toggle-button",
  templateUrl: "./cart-toggle-button.component.html",
  styleUrls: ["./cart-toggle-button.component.css"],
})
export class CartToggleButtonComponent {
  cartItems: TCartItems = [];

  constructor(private cartService: CartService) {
    this.cartService
      .getItems()
      .subscribe(listItems => (this.cartItems = listItems));
  }
}
