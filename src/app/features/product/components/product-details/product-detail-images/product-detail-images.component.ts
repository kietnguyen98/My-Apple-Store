import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { TProduct } from "../../../types";

@Component({
  selector: "app-product-detail-images",
  templateUrl: "./product-detail-images.component.html",
  styleUrls: ["./product-detail-images.component.css"],
})
export class ProductDetailImagesComponent implements OnChanges {
  @Input() product: TProduct | undefined;
  currentImageUrl: string | undefined = "";

  handleChangeCurrentImageUrl(newImageUrl: string) {
    this.currentImageUrl = newImageUrl;
  }

  ngOnChanges(change: SimpleChanges): void {
    if (change["product"].currentValue) {
      this.currentImageUrl = change["product"].currentValue.imageUrl;
    }
  }
}
