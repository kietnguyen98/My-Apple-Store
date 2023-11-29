import { Component } from "@angular/core";
import { PRICES, PRODUCT_QUERY_PARAM_KEYS } from "@/app/share/constants";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/app/share/configs";

@Component({
  selector: "app-product-filter-prices",
  templateUrl: "./product-filter-prices.component.html",
  styleUrls: ["./product-filter-prices.component.css"],
})
export class ProductFilterPricesComponent {
  startPrice: number = PRICES.DEFAULT_FILTER_START_PRICE;
  endPrice: number = PRICES.DEFAULT_FILTER_END_PRICE;
  MIN_PRICE: number = PRICES.DEFAULT_FILTER_START_PRICE;
  MAX_PRICE: number = PRICES.DEFAULT_FILTER_END_PRICE;

  constructor(private routeService: RouteService) {
    this.routeService.getProductQueryParams().subscribe(paramValue => {
      const startPriceValue = paramValue[PRODUCT_QUERY_PARAM_KEYS.START_PRICE];
      this.startPrice = Number(startPriceValue);

      const endPriceValue = paramValue[PRODUCT_QUERY_PARAM_KEYS.END_PRICE];
      this.endPrice = Number(endPriceValue);
    });
  }

  formatPriceSliderLabel(value: number): string {
    return `${value}$`;
  }

  handleStartPriceChange(newValue: number) {
    this.routeService.navigateWithQueryParams({
      path: PATH.PRODUCTS,
      queryParams: { startPrice: newValue, endPrice: this.endPrice },
    });
  }

  handleEndPriceChange(newValue: number) {
    this.routeService.navigateWithQueryParams({
      path: PATH.PRODUCTS,
      queryParams: { startPrice: this.startPrice, endPrice: newValue },
    });
  }
}
