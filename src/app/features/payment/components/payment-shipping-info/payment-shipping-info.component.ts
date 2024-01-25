import { dateConvertHelper } from "@/utilities";
import { Component } from "@angular/core";
import { TShippingMethod } from "../../types";
import { SHIPPING_METHOD_OPTIONS } from "../../constants";
import { VoucherService } from "@/app/features/voucher/services/voucher.service";
import { VOUCHER_TYPES } from "@/app/features/voucher/constants";
import { TVoucher } from "@/app/features/voucher/types";
import { PaymentService } from "../../services/payment.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";

const { SHIPPING } = VOUCHER_TYPES;
@Component({
  selector: "app-payment-shipping-info",
  templateUrl: "./payment-shipping-info.component.html",
  styleUrls: ["./payment-shipping-info.component.css"],
})
export class PaymentShippingInfoComponent {
  options: Array<TShippingMethod> = SHIPPING_METHOD_OPTIONS;
  currentShippingMethod: TShippingMethod = SHIPPING_METHOD_OPTIONS[0];
  minDeliveryDate: string = this.getDeliveryDate(
    this.currentShippingMethod.minDeliveryDays
  );
  maxDeliveryDate: string = this.getDeliveryDate(
    this.currentShippingMethod.maxDeliveryDays
  );
  discountVoucher: TVoucher | undefined = undefined;
  finalPrice: number = 0;
  shippingInfoForm = new FormGroup({
    shippingMethod: new FormControl("", Validators.required),
  });

  constructor(
    private voucherService: VoucherService,
    private paymentService: PaymentService
  ) {
    this.voucherService.getAppliedVouchers().subscribe(data => {
      this.discountVoucher = data.find(
        voucher => voucher.category.voucherType === SHIPPING
      );
      this.updateFinalPrice();
    });
  }

  getDeliveryDate(plusDate: number) {
    return dateConvertHelper.fromDateToDDMMYYYY(
      new Date(Date.now() + plusDate * 1000 * 60 * 60 * 24)
    );
  }

  changeShippingMethod(event: Event) {
    this.currentShippingMethod = SHIPPING_METHOD_OPTIONS.find(
      option =>
        option.value === Number((event.target as HTMLInputElement).value)
    ) as TShippingMethod;

    this.minDeliveryDate = this.getDeliveryDate(
      this.currentShippingMethod.minDeliveryDays
    );
    this.maxDeliveryDate = this.getDeliveryDate(
      this.currentShippingMethod.maxDeliveryDays
    );

    this.updateFinalPrice();
  }

  updateFinalPrice() {
    this.finalPrice =
      this.currentShippingMethod.cost >
      (this.discountVoucher as TVoucher).discountValue
        ? this.currentShippingMethod.cost -
          (this.discountVoucher as TVoucher).discountValue
        : 0;

    this.paymentService.updateShippingPrice(this.finalPrice);
  }
}
