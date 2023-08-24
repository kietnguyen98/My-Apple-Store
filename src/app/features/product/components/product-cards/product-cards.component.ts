import { Component, Input } from "@angular/core";
import { TProduct } from "@/types";
import { Router } from "@angular/router";
import { PATH } from "@/configs/routes";
@Component({
  selector: "app-product-cards",
  templateUrl: "./product-cards.component.html",
  styleUrls: ["./product-cards.component.css"],
})
export class ProductCardsComponent {
  @Input() product?: TProduct;
  @Input() shouldShowAddToCart: boolean = true;

  constructor(private router: Router) {}

  onGetDetailProduct() {
    this.router.navigate([PATH.LIST_PRODUCTS, this.product?.name]);
  }

  onNotify() {
    window.alert("you will be notify when the product goes on sale");
  }
}
