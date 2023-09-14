import { Component } from "@angular/core";
import { PATH } from "@/configs/routes";
import { RouteService } from "@/app/share/services/route.service";
import { CATEGORIES_VALUE, QUERY_PARAM_KEYS } from "@/constants";

type THomeIntroCategory = {
  imageUrl: string;
  name: string;
  description: string;
  value: (typeof CATEGORIES_VALUE)[keyof typeof CATEGORIES_VALUE];
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
      value: CATEGORIES_VALUE.IPHONE,
    },
    {
      imageUrl: "/assets/images/categories/ipad.png",
      name: "IPad",
      description:
        "Get the best tablet for you and your lover, those products are perfect made with high quality. With this item, you will be a pro vip person",
      value: CATEGORIES_VALUE.IPAD,
    },
    {
      imageUrl: "/assets/images/categories/iwatch.png",
      name: "IWatch",
      description:
        "Get the best watch for you and your lover, those products are perfect made with high quality. With this item, you will be a pro vip person",
      value: CATEGORIES_VALUE.IWATCH,
    },
  ];

  getToProductsPage(
    category: (typeof CATEGORIES_VALUE)[keyof typeof CATEGORIES_VALUE]
  ) {
    this.routeService.navigateWithParams({
      path: PATH.LIST_PRODUCTS,
      queryParams: [{ key: QUERY_PARAM_KEYS.CATEGORY, value: category }],
    });
  }
}
