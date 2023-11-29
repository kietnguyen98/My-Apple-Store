import {
  categoriesMockData,
  productsMockData,
} from "@/app/features/product/data";
import {
  TCategories,
  TCategoryValue,
  TProducts,
} from "@/app/features/product/types";
import { RouteService } from "@/app/share/services/route.service";
import { TBreadcrumbLink, TLink } from "@/app/share/types";
import { PATH } from "@/configs/routes";
import { Component } from "@angular/core";

type TDropdownBadgeTitle = TCategoryValue | "support" | "";

@Component({
  selector: "app-header-navigation-bar",
  templateUrl: "./header-navigation-bar.component.html",
  styleUrls: ["./header-navigation-bar.component.css"],
})
export class HeaderNavigationBarComponent {
  products: TProducts = productsMockData;
  categories: TCategories = categoriesMockData;
  supportLinks: Array<TLink> = [
    { name: "Term & Condition", to: "/" },
    { name: "Return & Exchange", to: "/" },
    { name: "Shipping & Delivery", to: "/" },
  ];
  hoverCategory: TDropdownBadgeTitle = "";

  constructor(private routeService: RouteService) {}

  changeHoverCategory(newValue: TDropdownBadgeTitle) {
    this.hoverCategory = newValue;
  }

  navigateToProductDetail(productName: string) {
    this.routeService.navigateWithUrlOnly({
      // path: `${PATH.PRODUCTS}/${productName}`,
      path: [PATH.PRODUCTS, productName],
      reload: true,
    });
    this.hoverCategory = "";
  }

  navigateToPage(url: string) {
    this.routeService.navigateWithUrlOnly({
      path: url,
      reload: true,
    });
    this.hoverCategory = "";
  }
}
