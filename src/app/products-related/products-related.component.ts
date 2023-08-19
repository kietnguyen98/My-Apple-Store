import { Component, Input } from "@angular/core";
import { TProducts } from "@/types";
@Component({
  selector: "app-products-related",
  templateUrl: "./products-related.component.html",
  styleUrls: ["./products-related.component.css"],
})
export class ProductsRelatedComponent {
  @Input() listProducts: TProducts = [];
}
