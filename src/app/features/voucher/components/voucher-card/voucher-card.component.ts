import { Component, Input } from "@angular/core";
import { TVoucher } from "../../types";
import { VOUCHER_TYPES } from "../../constants";

@Component({
  selector: "app-voucher-card",
  templateUrl: "./voucher-card.component.html",
  styleUrls: ["./voucher-card.component.css"],
})
export class VoucherCardComponent {
  @Input() data: TVoucher | undefined;
  VOUCHER_TYPES = VOUCHER_TYPES;
}
