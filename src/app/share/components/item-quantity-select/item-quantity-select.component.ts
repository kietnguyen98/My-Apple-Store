import { Component, Input } from "@angular/core";
import { TComponentSizeValues } from "../../types";
import { COMPONENT_SIZE_VALUES } from "../../constants";

@Component({
  selector: "app-item-quantity-select",
  templateUrl: "./item-quantity-select.component.html",
  styleUrls: ["./item-quantity-select.component.css"],
})
export class ItemQuantitySelectComponent {
  @Input() size: TComponentSizeValues = COMPONENT_SIZE_VALUES.MEDIUM;
  @Input() quantity: number = 0;
  @Input() increaseQuantityCallback?: () => void;
  @Input() decreaseQuantityCallback?: () => void;

  increaseQuantity() {
    if (this.increaseQuantityCallback) this.increaseQuantityCallback();
  }

  decreaseQuantity() {
    if (this.decreaseQuantityCallback) this.decreaseQuantityCallback();
  }
}
