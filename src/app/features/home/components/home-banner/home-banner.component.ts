import { Component } from "@angular/core";
import { PATH } from "@/app/share/configs";
import { RouteService } from "@/app/share/services/route.service";

@Component({
  selector: "app-home-banner",
  templateUrl: "./home-banner.component.html",
  styleUrls: ["./home-banner.component.css"],
})
export class HomeBannerComponent {
  constructor(private routeService: RouteService) {}

  getListProductsPage() {
    this.routeService.navigateWithUrlOnly({ path: PATH.PRODUCTS });
  }
}
