import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { TMemoryCapacity, TMemoryCapacities, TProduct } from "@/types";
import { ProductService } from "../../services/product.service";
@Component({
  selector: "app-product-memories-select",
  templateUrl: "./product-memories-select.component.html",
  styleUrls: ["./product-memories-select.component.css"],
})
export class ProductMemoriesSelectComponent {
  options: TMemoryCapacities = [];
  currentOption?: TMemoryCapacity;
  @Output() changeMemoryCapacity = new EventEmitter<TMemoryCapacity>(true);

  constructor(private productService: ProductService) {
    this.productService
      .getProductDetail()
      .subscribe((data: TProduct | null) => {
        this.options = data?.memoryCapacities || [];
        setTimeout(() => {
          // wrap setTimeout function here to avoid NG0100 error
          this.handleChangeMemoryCapacity(this.options[0]);
        }, 0);
      });
  }

  handleChangeMemoryCapacity(newValue: TMemoryCapacity) {
    if (newValue !== this.currentOption) {
      this.currentOption = newValue;
      this.changeMemoryCapacity.emit(this.currentOption);
    }
  }
}
