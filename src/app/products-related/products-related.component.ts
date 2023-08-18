import { Component, Input } from "@angular/core";
import { IProduct } from "@/data/products";

@Component({
  selector: "app-products-related",
  templateUrl: "./products-related.component.html",
  styleUrls: ["./products-related.component.css"],
})
export class ProductsRelatedComponent {
  @Input() listProducts: Array<IProduct> = [];
}
