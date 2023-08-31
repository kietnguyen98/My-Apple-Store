import { Component, Output, EventEmitter } from "@angular/core";
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
  @Output() changeColor = new EventEmitter<TColor>();

  constructor(private productService: ProductService) {
    this.productService
      .getProductDetail()
      .subscribe((data: TProduct | null) => {
        this.options = data?.colors || [];
        setTimeout(() => {
          // wrap setTimeout function here to avoid NG0100 error
          this.handleChangeColor(this.options[0]);
        }, 0);
      });
  }

  handleChangeColor(newColor: TColor) {
    if (newColor.id !== this.currentOption?.id) {
      this.currentOption = newColor;
      this.changeColor.emit(this.currentOption);
    }
  }
}
