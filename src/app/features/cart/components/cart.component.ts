import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "./service/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    if (this.items.length === 0) {
      window.alert("Please add at least one item to purchase !");
    } else {
      this.items = this.cartService.clearCart();
      console.log("Your order has been submitted", this.checkoutForm.value);
    }
    this.checkoutForm.reset();
  }
}