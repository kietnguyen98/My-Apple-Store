import { dateConvertHelper } from "@/utilities";
import { Component } from "@angular/core";
import { TShippingMethod } from "../../types";
import { SHIPPING_METHOD_OPTIONS } from "../../constants";
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
  }
}
