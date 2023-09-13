import { Component } from "@angular/core";
import { ProductService } from "../../../services/product.service";
import { MatRadioChange } from "@angular/material/radio";
import { PRICES } from "@/constants";

@Component({
  selector: "app-product-sort-by-prices",
  templateUrl: "./product-sort-by-prices.component.html",
  styleUrls: ["./product-sort-by-prices.component.css"],
})
export class ProductSortByPricesComponent {
  sortPriceValue: number | null = null;
  readonly PRICE_SORT_OPTIONS = PRICES.SORT_OPTIONS;

  constructor(private productService: ProductService) {}

  handleSortPriceValueChange(newValue: MatRadioChange) {
    this.sortPriceValue = newValue.value;
    this.productService.setQueryParams({
      sortPriceDirection: this.sortPriceValue || undefined,
    });
  }
}
