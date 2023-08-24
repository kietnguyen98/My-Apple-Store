import { Component, Input, OnInit } from "@angular/core";
import { TColor, TColors, TProduct } from "@/types";
import { ProductService } from "../../services/product.service";
@Component({
  selector: "app-product-colors-select",
  templateUrl: "./product-colors-select.component.html",
  styleUrls: ["./product-colors-select.component.css"],
})
export class ProductColorsSelectComponent {
  options: TColors = [];
  currentOption: TColor | null = null;

  constructor(private productService: ProductService) {
    this.productService
      .getProductDetail()
      .subscribe((data: TProduct | null) => {
        this.options = data?.colors || [];
        this.handleChangeColor(this.options[0]);
      });
  }

  handleChangeColor(newColor: TColor) {
    this.currentOption = newColor;
  }
}
