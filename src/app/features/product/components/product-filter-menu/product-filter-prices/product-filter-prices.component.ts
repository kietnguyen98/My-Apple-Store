import { Component, OnInit } from "@angular/core";
import { PRICES } from "@/constants";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "app-product-filter-prices",
  templateUrl: "./product-filter-prices.component.html",
  styleUrls: ["./product-filter-prices.component.css"],
})
export class ProductFilterPricesComponent implements OnInit {
  startPrice: number = PRICES.DEFAULT_FILTER_START_PRICE;
  endPrice: number = PRICES.DEFAULT_FILTER_END_PRICE;
  MIN_PRICE: number = PRICES.DEFAULT_FILTER_START_PRICE;
  MAX_PRICE: number = PRICES.DEFAULT_FILTER_END_PRICE;

  constructor(private productService: ProductService) {}

  formatPriceSliderLabel(value: number): string {
    return `${value}$`;
  }

  handleStartPriceChange(newValue: number) {
    this.startPrice = newValue;
    this.productService.setQueryParams({
      startPrice: this.startPrice,
      endPrice: this.endPrice,
    });
  }

  handleEndPriceChange(newValue: number) {
    this.endPrice = newValue;
    this.productService.setQueryParams({
      startPrice: this.startPrice,
      endPrice: this.endPrice,
    });
  }

  ngOnInit(): void {
    this.productService.setQueryParams({
      startPrice: this.startPrice,
      endPrice: this.endPrice,
    });
  }
}
