import { Component, Input } from "@angular/core";
import { TProduct } from "@/types";
@Component({
  selector: "app-product-cards",
  templateUrl: "./product-cards.component.html",
  styleUrls: ["./product-cards.component.css"],
})
export class ProductCardsComponent {
  @Input() product?: TProduct;
  @Input() shouldShowAddToCart: boolean = true;

  onNotify() {
    window.alert("you will be notify when the product goes on sale");
  }
}
