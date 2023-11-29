import { Component } from "@angular/core";
import { PATH } from "@/app/share/configs";
import { RouteService } from "@/app/share/services/route.service";
import {
  CATEGORY_VALUES,
  PRODUCT_QUERY_PARAM_KEYS,
} from "@/app/share/constants";

type THomeIntroCategory = {
  imageUrl: string;
  name: string;
  description: string;
  value: (typeof CATEGORY_VALUES)[keyof typeof CATEGORY_VALUES];
};

@Component({
  selector: "app-home-category-shortcut",
  templateUrl: "./home-category-shortcut.component.html",
  styleUrls: ["./home-category-shortcut.component.css"],
})
export class HomeCategoryShortcutComponent {
  constructor(private routeService: RouteService) {}

  categories: Array<THomeIntroCategory> = [
    {
      imageUrl: "/assets/images/categories/iphone.png",
      name: "IPhone",
      description:
        "Get the best phone for you and your lover, those products are perfect made with high quality. With this item, you will be a pro vip person",
      value: CATEGORY_VALUES.IPHONE,
    },
    {
      imageUrl: "/assets/images/categories/ipad.png",
      name: "IPad",
      description:
        "Get the best tablet for you and your lover, those products are perfect made with high quality. With this item, you will be a pro vip person",
      value: CATEGORY_VALUES.IPAD,
    },
    {
      imageUrl: "/assets/images/categories/iwatch.png",
      name: "IWatch",
      description:
        "Get the best watch for you and your lover, those products are perfect made with high quality. With this item, you will be a pro vip person",
      value: CATEGORY_VALUES.IWATCH,
    },
  ];

  getToProductsPage(
    categoryValue: (typeof CATEGORY_VALUES)[keyof typeof CATEGORY_VALUES]
  ) {
    this.routeService.navigateWithQueryParams({
      path: PATH.PRODUCTS,
      queryParams: { category: categoryValue },
    });
  }
}
