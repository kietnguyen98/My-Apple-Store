import { Component, Input } from "@angular/core";
import { IProduct } from "@/data/products";

@Component({
  selector: "app-product-cards",
  templateUrl: "./product-cards.component.html",
  styleUrls: ["./product-cards.component.css"],
})
export class ProductCardsComponent {
  @Input() product: IProduct | undefined;
  @Input() shouldShowAddToCart: boolean = true;

  onNotify() {
    window.alert("you will be notify when the product goes on sale");
  }
}
