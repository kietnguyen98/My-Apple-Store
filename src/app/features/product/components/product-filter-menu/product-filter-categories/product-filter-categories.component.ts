import { Component } from "@angular/core";
import {
  CATEGORY_OPTIONS,
  CATEGORY_VALUES,
  PRODUCT_QUERY_PARAM_KEYS,
} from "@/app/share/constants";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/app/share/configs";
import { MatChipListboxChange } from "@angular/material/chips";
@Component({
  selector: "app-product-filter-categories",
  templateUrl: "./product-filter-categories.component.html",
  styleUrls: ["./product-filter-categories.component.css"],
})
export class ProductFilterCategoriesComponent {
  CATEGORY_OPTIONS = CATEGORY_OPTIONS;
  currentCategory: string = CATEGORY_VALUES.ALL;

  constructor(private routeService: RouteService) {
    this.routeService.getProductQueryParams().subscribe(paramValue => {
      this.currentCategory = paramValue[PRODUCT_QUERY_PARAM_KEYS.CATEGORY];
    });
  }

  handleChangeCategory(event: MatChipListboxChange) {
    this.routeService.navigateWithQueryParams({
      path: PATH.PRODUCTS,
      queryParams: { category: event.value },
    });
  }
}
