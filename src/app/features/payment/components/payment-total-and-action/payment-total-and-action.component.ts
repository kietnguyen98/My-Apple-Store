import { Component } from "@angular/core";
import { PaymentService } from "../../services/payment.service";
import { TCartItems } from "@/app/features/cart/types";
import { cartHelper } from "@/utilities";
import { VoucherService } from "@/app/features/voucher/services/voucher.service";

@Component({
  selector: "app-payment-total-and-action",
  templateUrl: "./payment-total-and-action.component.html",
  styleUrls: ["./payment-total-and-action.component.css"],
})
export class PaymentTotalAndActionComponent {
  totalPrice: number = 0;
  finalShippingPrice: number = 0;
  itemsDiscount: number = 0;
  items: TCartItems = [];

  constructor(
    private paymentService: PaymentService,
    private voucherService: VoucherService
  ) {
    this.paymentService.getPurchasedItems().subscribe(items => {
      this.items = items;
      this.totalPrice = cartHelper.getTotalExactPrice(this.items);
    });

    this.paymentService
      .getShippingPrice()
      .subscribe(data => (this.finalShippingPrice = data));

    this.voucherService
      .getPurchasesDiscount()
      .subscribe(data => (this.itemsDiscount = data));
  }
}
