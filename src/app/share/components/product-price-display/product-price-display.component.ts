import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { TMemoryCapacity, TProduct } from "@/app/features/product/types";
import { getOriginalPrice, getSalePrice } from "@/utilities/productHelper";
import { TComponentSizeValues } from "../../types";
import { COMPONENT_SIZE_VALUES } from "../../constants";

@Component({
  selector: "app-product-price-display",
  templateUrl: "./product-price-display.component.html",
  styleUrls: ["./product-price-display.component.css"],
})
export class ProductPriceDisplayComponent implements OnInit, OnChanges {
  @Input() product?: TProduct;
  @Input() currentMemoryCapacity: TMemoryCapacity | undefined;
  @Input() showLabel: boolean = false;
  @Input() textSize: TComponentSizeValues = COMPONENT_SIZE_VALUES.MEDIUM;
  originalPrice: number | undefined;
  salePrice: number | undefined;

  ngOnInit(): void {
    this.updatePrice();
  }

  updatePrice() {
    if (this.product) {
      this.originalPrice = getOriginalPrice(
        this.product,
        this.currentMemoryCapacity || this.product.memoryCapacities?.[0]
      );
      if (this.product.salePercentage > 0) {
        this.salePrice = getSalePrice(
          this.product,
          this.currentMemoryCapacity || this.product.memoryCapacities?.[0]
        );
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["currentMemoryCapacity"]?.currentValue) {
      this.updatePrice();
    }
  }
}
