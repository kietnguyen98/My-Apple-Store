import { Component } from "@angular/core";
import {
  PRODUCT_QUERY_PARAM_KEYS,
  PRODUCT_STATUS_OPTIONS,
} from "@/app/share/constants";
import { TProductStatusValues } from "../../../types";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/app/share/configs";

@Component({
  selector: "app-product-filter-status",
  templateUrl: "./product-filter-status.component.html",
  styleUrls: ["./product-filter-status.component.css"],
})
export class ProductFilterStatusComponent {
  currentValues: Array<TProductStatusValues> = [];
  options = PRODUCT_STATUS_OPTIONS;

  constructor(private routeService: RouteService) {
    this.routeService.getProductQueryParams().subscribe(paramValue => {
      const statusValues = paramValue[PRODUCT_QUERY_PARAM_KEYS.STATUS];
      this.currentValues = statusValues
        ? (statusValues.split(",") as Array<TProductStatusValues>)
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

    this.routeService.navigateWithQueryParams({
      path: PATH.PRODUCTS,
      queryParams: { status: this.currentValues.join(",") },
    });
  }
}
