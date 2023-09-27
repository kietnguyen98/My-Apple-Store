import { Component, Input } from "@angular/core";
import { TProduct } from "../../../types";

@Component({
  selector: "app-product-description-and-rate",
  templateUrl: "./product-description-and-rate.component.html",
  styleUrls: ["./product-description-and-rate.component.css"],
})
export class ProductDescriptionAndRateComponent {
  @Input() product?: TProduct;
}
