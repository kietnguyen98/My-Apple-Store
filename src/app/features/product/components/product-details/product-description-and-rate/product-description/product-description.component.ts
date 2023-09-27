import { TProduct } from "@/app/features/product/types";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product-description",
  templateUrl: "./product-description.component.html",
  styleUrls: ["./product-description.component.css"],
})
export class ProductDescriptionComponent {
  @Input() product?: TProduct;
}
