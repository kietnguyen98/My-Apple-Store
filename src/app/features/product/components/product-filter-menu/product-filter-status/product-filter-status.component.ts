import { Component } from "@angular/core";
import { PRODUCT_QUERY_PARAM_KEYS, PRODUCT_STATUS_OPTIONS } from "@/constants";
import { TProductStatusValues } from "../../../types";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/configs/routes";

@Component({
  selector: "app-product-filter-status",
  templateUrl: "./product-filter-status.component.html",
  styleUrls: ["./product-filter-status.component.css"],
})
export class ProductFilterStatusComponent {
  currentValues: Array<TProductStatusValues> = [];
  options = PRODUCT_STATUS_OPTIONS;

  constructor(private routeService: RouteService) {
    this.routeService.getParamStatus().subscribe(paramValue => {
      this.currentValues = paramValue
        ? (paramValue.split(",") as Array<TProductStatusValues>)
        : [];
    });
  }

  handleChangeValues(changeValue: TProductStatusValues) {
    if (this.currentValues.indexOf(changeValue) > -1) {
      this.currentValues = this.currentValues.filter(
        value => value !== changeValue
      );
    } else {
      this.currentValues.push(changeValue);
    }

    this.routeService.navigateWithParams({
      path: PATH.LIST_PRODUCTS,
      queryParams: [
        {
          key: PRODUCT_QUERY_PARAM_KEYS.STATUS,
          value: this.currentValues.join(","),
        },
      ],
    });
  }
}
