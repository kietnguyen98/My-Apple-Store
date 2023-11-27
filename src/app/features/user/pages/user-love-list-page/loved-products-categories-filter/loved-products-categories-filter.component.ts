import {
  CATEGORY_OPTIONS,
  CATEGORY_VALUES,
  LOVED_PRODUCT_QUERY_PARAM_KEYS,
} from "@/app/share/constants";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/configs/routes";
import { Component } from "@angular/core";
import { MatChipListboxChange } from "@angular/material/chips";

@Component({
  selector: "app-loved-products-categories-filter",
  templateUrl: "./loved-products-categories-filter.component.html",
  styleUrls: ["./loved-products-categories-filter.component.css"],
})
export class LovedProductsCategoriesFilterComponent {
  CATEGORY_OPTIONS = CATEGORY_OPTIONS;
  currentCategory: string = CATEGORY_VALUES.ALL;

  constructor(private routeService: RouteService) {
    this.routeService.getLovedProductsQueryParams().subscribe(paramValue => {
      this.currentCategory =
        paramValue[LOVED_PRODUCT_QUERY_PARAM_KEYS.CATEGORY];
    });
  }

  changeCategory(event: MatChipListboxChange) {
    this.routeService.navigateWithQueryParams({
      path: `${PATH.USER}/${PATH.LOVED_PRODUCTS}`,
      queryParams: { category: event.value },
    });
  }
}
