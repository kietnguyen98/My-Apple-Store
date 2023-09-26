import { TProduct } from "@/types";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product-description-and-rate",
  templateUrl: "./product-description-and-rate.component.html",
  styleUrls: ["./product-description-and-rate.component.css"],
})
export class ProductDescriptionAndRateComponent {
  @Input() product?: TProduct;
}
