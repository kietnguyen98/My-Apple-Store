import { TProduct } from "@/app/features/product/types";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/configs/routes";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-loved-product-card",
  templateUrl: "./loved-product-card.component.html",
  styleUrls: ["./loved-product-card.component.css"],
})
export class LovedProductCardComponent {
  @Input() product: TProduct | undefined;

  constructor(private routeService: RouteService) {}

  onGetDetailProduct() {
    this.routeService.navigateWithUrlOnly({
      path: [PATH.PRODUCTS, this.product?.name as string],
      reload: true,
    });
  }
}
