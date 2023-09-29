import { Component, Output, EventEmitter } from "@angular/core";
import { ProductService } from "../../../services/product.service";
import { TMemoryCapacities, TMemoryCapacity, TProduct } from "../../../types";
@Component({
  selector: "app-product-memories-select",
  templateUrl: "./product-memories-select.component.html",
  styleUrls: ["./product-memories-select.component.css"],
})
export class ProductMemoriesSelectComponent {
  options: TMemoryCapacities = [];
  currentOption?: TMemoryCapacity;
  @Output() changeMemoryCapacity = new EventEmitter<TMemoryCapacity>();

  constructor(private productService: ProductService) {
    this.productService
      .getProductDetail()
      .subscribe((data: TProduct | null) => {
        this.options = data?.memoryCapacities || [];
        if (this.options.length > 0)
          this.handleChangeMemoryCapacity(this.options[0]);
      });
  }

  handleChangeMemoryCapacity(newValue: TMemoryCapacity) {
    if (newValue !== this.currentOption) {
      this.currentOption = newValue;
      this.changeMemoryCapacity.emit(this.currentOption);
    }
  }
}
