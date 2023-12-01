import { Component } from "@angular/core";
import { PaymentService } from "../../services/payment.service";
import { TCartItems } from "@/app/features/cart/types";

@Component({
  selector: "app-payment-total-and-action",
  templateUrl: "./payment-total-and-action.component.html",
  styleUrls: ["./payment-total-and-action.component.css"],
})
export class PaymentTotalAndActionComponent {
  totalPrice: number = 0;
  items: TCartItems = [];

  constructor(private paymentService: PaymentService) {
    this.paymentService.getPurchasedItems().subscribe(items => {
      this.items = items;
      this.totalPrice = this.items.reduce(
        (prev, item) =>
          prev +
          (item.checked
            ? item.quantity *
              (item.product.price + (item.selectedMemory?.plusPrice || 0))
            : 0),
        0
      );
    });
  }
}
