import { Component, Input } from "@angular/core";
import { TProduct } from "@/types";
import { PATH } from "@/configs/routes";
import { RouteService } from "@/app/share/services/route.service";
@Component({
  selector: "app-product-cards",
  templateUrl: "./product-cards.component.html",
  styleUrls: ["./product-cards.component.css"],
})
export class ProductCardsComponent {
  @Input() product?: TProduct;
  @Input() inDetailPage: boolean = false;

  constructor(private routeService: RouteService) {}

  onGetDetailProduct() {
    this.routeService.navigateWithUrlOnly({
      path: [PATH.LIST_PRODUCTS, this.product?.name as string],
      reload: this.inDetailPage,
    });
  }

  onNotify() {
    window.alert("you will be notify when the product goes on sale");
  }
}
