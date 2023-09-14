import { Component } from "@angular/core";
import { PRICES, QUERY_PARAM_KEYS } from "@/constants";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/configs/routes";

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
    this.routeService
      .getParamStartPrice()
      .subscribe(value => (this.startPrice = value));
    this.routeService
      .getParamEndPrice()
      .subscribe(value => (this.endPrice = value));
  }

  formatPriceSliderLabel(value: number): string {
    return `${value}$`;
  }

  handleStartPriceChange(newValue: number) {
    this.routeService.navigateWithParams({
      path: PATH.LIST_PRODUCTS,
      queryParams: [{ key: QUERY_PARAM_KEYS.START_PRICE, value: newValue }],
    });
  }

  handleEndPriceChange(newValue: number) {
    this.routeService.navigateWithParams({
      path: PATH.LIST_PRODUCTS,
      queryParams: [{ key: QUERY_PARAM_KEYS.END_PRICE, value: newValue }],
    });
  }
}
