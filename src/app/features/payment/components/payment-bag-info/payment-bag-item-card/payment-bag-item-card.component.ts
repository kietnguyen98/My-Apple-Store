import { Component, Input } from "@angular/core";
import { TCartItem } from "@/app/features/cart/types";

@Component({
  selector: "app-payment-bag-item-card",
  templateUrl: "./payment-bag-item-card.component.html",
  styleUrls: ["./payment-bag-item-card.component.css"],
})
export class PaymentBagItemCardComponent {
  @Input() item: TCartItem | undefined;
}
