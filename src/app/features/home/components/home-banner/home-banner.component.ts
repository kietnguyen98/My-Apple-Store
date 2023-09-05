import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PATH } from "@/configs/routes";

@Component({
  selector: "app-home-banner",
  templateUrl: "./home-banner.component.html",
  styleUrls: ["./home-banner.component.css"],
})
export class HomeBannerComponent {
  constructor(private router: Router) {}

  getListProductsPage() {
    this.router.navigateByUrl(PATH.LIST_PRODUCTS);
  }
}
