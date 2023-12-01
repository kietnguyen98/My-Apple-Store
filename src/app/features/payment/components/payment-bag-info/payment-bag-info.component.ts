import { TCartItems } from "@/app/features/cart/types";
import { Component } from "@angular/core";
import { PaymentService } from "../../services/payment.service";
import { mockCartsData } from "@/app/features/cart/data";
@Component({
  selector: "app-payment-bag-info",
  templateUrl: "./payment-bag-info.component.html",
  styleUrls: ["./payment-bag-info.component.css"],
})
export class PaymentBagInfoComponent {
  items: TCartItems = [];

  constructor(private paymentService: PaymentService) {
    this.paymentService.getPurchasedItems().subscribe(cartItems => {
      this.items = cartItems;
    });
  }
}
