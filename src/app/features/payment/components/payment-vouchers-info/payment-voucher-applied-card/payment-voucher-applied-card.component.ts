import { Component, Input } from "@angular/core";
import { TVoucher } from "@/app/features/voucher/types";
import { VOUCHER_TYPES } from "@/app/features/voucher/constants";

@Component({
  selector: "app-payment-voucher-applied-card",
  templateUrl: "./payment-voucher-applied-card.component.html",
  styleUrls: ["./payment-voucher-applied-card.component.css"],
})
export class PaymentVoucherAppliedCardComponent {
  @Input() voucher: TVoucher | undefined;
  VOUCHER_TYPES = VOUCHER_TYPES;
}
