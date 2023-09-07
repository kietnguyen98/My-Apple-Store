import { Component } from "@angular/core";
import { PATH } from "@/configs/routes";
import { Router } from "@angular/router";

type THomeIntroCategory = {
  imageUrl: string;
  name: string;
  description: string;
  to: string;
};

@Component({
  selector: "app-home-category-shortcut",
  templateUrl: "./home-category-shortcut.component.html",
  styleUrls: ["./home-category-shortcut.component.css"],
})
export class HomeCategoryShortcutComponent {
  constructor(private router: Router) {}

  categories: Array<THomeIntroCategory> = [
    {
      imageUrl: "/assets/images/categories/iphone.png",
      name: "IPhone",
      description:
        "Get the best phone for you and your lover, those products are perfect made with high quality. With this item, you will be a pro vip person",
      to: PATH.LIST_PRODUCTS,
    },
    {
      imageUrl: "/assets/images/categories/ipad.png",
      name: "IPad",
      description:
        "Get the best tablet for you and your lover, those products are perfect made with high quality. With this item, you will be a pro vip person",
      to: PATH.LIST_PRODUCTS,
    },
    {
      imageUrl: "/assets/images/categories/iwatch.png",
      name: "IWatch",
      description:
        "Get the best watch for you and your lover, those products are perfect made with high quality. With this item, you will be a pro vip person",
      to: PATH.LIST_PRODUCTS,
    },
  ];

  getProductsByCategoryPage(path: string) {
    this.router.navigateByUrl(path);
  }
}
