import {
  PAYMENT_METHODS,
  PAYMENT_METHOD_CODES,
} from "@/app/share/constants/payments";
import { TPaymentMethod } from "@/app/share/types";
import { Component } from "@angular/core";

@Component({
  selector: "app-payment-method-chip",
  templateUrl: "./payment-method-chip.component.html",
  styleUrls: ["./payment-method-chip.component.css"],
})
export class PaymentMethodChipComponent {
  PAYMENT_METHODS = PAYMENT_METHODS;
  PAYMENT_METHOD_CODS = PAYMENT_METHOD_CODES;
  currentMethod: TPaymentMethod = PAYMENT_METHODS[1];

  selectMethod(data: TPaymentMethod) {
    if (data.code !== this.currentMethod.code) this.currentMethod = data;
  }
}
