import {
  cardChipImageUrl,
  masterCardPaymentImageUrl,
  visaCardImageUrl,
} from "@/app/share/constants/images";
import { PAYMENT_METHOD_CODES } from "@/app/share/constants/payments";
import { TPaymentMethodCodes } from "@/app/share/types";
import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-payment-method-card-form",
  templateUrl: "./payment-method-card-form.component.html",
  styleUrls: ["./payment-method-card-form.component.css"],
})
export class PaymentMethodCardFormComponent {
  @Input() cardType: TPaymentMethodCodes = PAYMENT_METHOD_CODES.VISA;
  PAYMENT_METHOD_CODES = PAYMENT_METHOD_CODES;
  MASTER_CARD_IMAGE_URL = masterCardPaymentImageUrl;
  VISA_CARD_IMAGE_URL = visaCardImageUrl;
  CARD_CHIP_IMAGE_URL = cardChipImageUrl;
  cardForm = new FormGroup({
    cardNumber: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ])
    ),
    cardHolderName: new FormControl("", Validators.required),
    cardValidDate: new FormControl("", Validators.required),
    cardCvc: new FormControl("", Validators.required),
  });
}
