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
    this.router
      .navigateByUrl("/dummy", { skipLocationChange: true })
      .then(() => {
        this.router.navigate([PATH.LIST_PRODUCTS, this.product?.name]);
        window.scrollTo(0, 0);
      });
  }

  onNotify() {
    window.alert("you will be notify when the product goes on sale");
  }
}
