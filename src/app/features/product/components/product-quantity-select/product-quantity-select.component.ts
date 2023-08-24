import { Component, Output, EventEmitter } from "@angular/core";
import { ProductService } from "../../services/product.service";
@Component({
  selector: "app-product-quantity-select",
  templateUrl: "./product-quantity-select.component.html",
  styleUrls: ["./product-quantity-select.component.css"],
})
export class ProductQuantitySelectComponent {
  quantity: number = 1;
  @Output() changeQuantity = new EventEmitter<number>(true);

  constructor(private productService: ProductService) {
    this.productService.getProductDetail().subscribe(() => {
      this.quantity = 1;
      this.changeQuantity.emit(this.quantity);
    });
  }

  increaseQuantity() {
    if (this.quantity < 99) {
      this.quantity = this.quantity + 1;
      this.changeQuantity.emit(this.quantity);
    }
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
      this.changeQuantity.emit(this.quantity);
    }
  }
}
