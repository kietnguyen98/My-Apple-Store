import { Component } from "@angular/core";
import { categories } from "@/app/features/product/data/categories.data";
import { CATEGORIES_VALUE, PRODUCT_QUERY_PARAM_KEYS } from "@/constants";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/configs/routes";
import { MatChipListboxChange } from "@angular/material/chips";
import { TCategories } from "../../../types";
@Component({
  selector: "app-product-filter-categories",
  templateUrl: "./product-filter-categories.component.html",
  styleUrls: ["./product-filter-categories.component.css"],
})
export class ProductFilterCategoriesComponent {
  categories: TCategories = categories;
  currentCategory: string = CATEGORIES_VALUE.ALL;

  constructor(private routeService: RouteService) {
    this.routeService.getProductQueryParams().subscribe(paramValue => {
      const categoryValue = paramValue[PRODUCT_QUERY_PARAM_KEYS.CATEGORY];
      this.currentCategory = categoryValue;
    });
  }

  handleChangeCategory(event: MatChipListboxChange) {
    const newCategory = event.value;
    this.routeService.navigateWithQueryParams({
      path: PATH.LIST_PRODUCTS,
      queryParams: { category: newCategory },
    });
  }
}
