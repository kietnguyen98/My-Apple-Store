import { Component } from "@angular/core";
import { categories } from "@/data/categories";
import { TCategories } from "@/types";
import { CATEGORIES_VALUE, PRODUCT_QUERY_PARAM_KEYS } from "@/constants";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/configs/routes";
@Component({
  selector: "app-product-filter-categories",
  templateUrl: "./product-filter-categories.component.html",
  styleUrls: ["./product-filter-categories.component.css"],
})
export class ProductFilterCategoriesComponent {
  categories: TCategories = categories;
  currentCategory: string = CATEGORIES_VALUE.ALL;

  constructor(private routeService: RouteService) {
    this.routeService
      .getParamCategory()
      .subscribe(paramValue => (this.currentCategory = paramValue as string));
  }

  handleChangeCategory(newCategory: string) {
    if (newCategory !== this.currentCategory) {
      this.currentCategory = newCategory;

      this.routeService.navigateWithParams({
        path: PATH.LIST_PRODUCTS,
        queryParams: [
          {
            key: PRODUCT_QUERY_PARAM_KEYS.CATEGORY,
            value: this.currentCategory,
          },
        ],
      });
    }
  }
}
