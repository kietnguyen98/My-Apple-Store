import { Component } from "@angular/core";
import { MatRadioChange } from "@angular/material/radio";
import { PRICES, PRODUCT_QUERY_PARAM_KEYS } from "@/constants";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/configs/routes";

@Component({
  selector: "app-product-sort-by-prices",
  templateUrl: "./product-sort-by-prices.component.html",
  styleUrls: ["./product-sort-by-prices.component.css"],
})
export class ProductSortByPricesComponent {
  currentValue: number = 0;
  readonly PRICE_SORT_OPTIONS = PRICES.SORT_OPTIONS;

  constructor(private routeService: RouteService) {
    this.routeService
      .getParamSortPriceDirection()
      .subscribe(paramValue => (this.currentValue = Number(paramValue)));
  }

  handleSortPriceValueChange(newValue: MatRadioChange) {
    this.currentValue = newValue.value as number;
    this.routeService.navigateWithParams({
      path: PATH.LIST_PRODUCTS,
      queryParams: [
        {
          key: PRODUCT_QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION,
          value: this.currentValue,
        },
      ],
    });
  }
}
