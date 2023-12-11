import { Component, Input } from "@angular/core";
import { TVoucher } from "../../types";
import { VOUCHER_TYPES } from "../../constants";
import { PaymentService } from "@/app/features/payment/services/payment.service";
import { cartHelper } from "@/utilities";

@Component({
  selector: "app-voucher-card",
  templateUrl: "./voucher-card.component.html",
  styleUrls: ["./voucher-card.component.css"],
})
export class VoucherCardComponent {
  @Input() data: TVoucher | undefined;
  VOUCHER_TYPES = VOUCHER_TYPES;
  totalPurchasedPrice: number = 0;
  diffPrice: number = 0;

  constructor(private paymentService: PaymentService) {
    this.paymentService.getPurchasedItems().subscribe(data => {
      this.totalPurchasedPrice = cartHelper.getTotalExactPrice(data);
    });
  }
}
