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
      .subscribe(paramValue => (this.startPrice = paramValue as number));
    this.routeService
      .getParamEndPrice()
      .subscribe(paramValue => (this.endPrice = paramValue as number));
  }

  formatPriceSliderLabel(value: number): string {
    return `${value}$`;
  }

  handleStartPriceChange(newValue: number) {
    this.routeService.navigateWithParams({
      path: PATH.LIST_PRODUCTS,
      queryParams: [
        { key: QUERY_PARAM_KEYS.START_PRICE, value: newValue },
        { key: QUERY_PARAM_KEYS.END_PRICE, value: this.endPrice },
      ],
    });
  }

  handleEndPriceChange(newValue: number) {
    this.routeService.navigateWithParams({
      path: PATH.LIST_PRODUCTS,
      queryParams: [
        { key: QUERY_PARAM_KEYS.START_PRICE, value: this.startPrice },
        { key: QUERY_PARAM_KEYS.END_PRICE, value: newValue },
      ],
    });
  }
}
