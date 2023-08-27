import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { TProduct, TMemoryCapacity, TColor, TProducts } from "@/types";
import { products } from "@/data/products";
import { ROUTE_PARAMS } from "@/configs/routes";
import { ProductService } from "../../services/product.service";
import { CartService } from "@/app/features/cart/service/cart.service";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent {
  product: TProduct | undefined;
  currentImageUrl: string | undefined = "";
  currentMemoryCapacity: TMemoryCapacity | undefined;
  currentColor: TColor | undefined;
  currentProductPrice: number = 0;
  currentQuantity: number = 1;
  totalPrice: number = 0;
  listRelatedProducts: TProducts = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const productNameFromRoute = params.get(ROUTE_PARAMS.PRODUCT_NAME);

      this.product = products.find(
        product => product.name === productNameFromRoute
      );

      this.currentMemoryCapacity = undefined;
      this.productService.setProductDetail(this.product as TProduct);
      this.refreshProductInfo(this.product as TProduct);
    });
  }

  refreshProductInfo(product: TProduct) {
    this.currentImageUrl = product.imageUrl;

    this.listRelatedProducts = products.filter(
      product =>
        product.category.id === this.product?.category.id &&
        product !== this.product
    );
  }

  handleChangeMemoryCapacity(newValue: TMemoryCapacity) {
    this.currentMemoryCapacity = newValue;
    this.updateCurrentProductPrice();
    this.updateTotalProductPrice();
  }

  handleChangeQuantity(newValue: number) {
    this.currentQuantity = newValue;
    this.updateTotalProductPrice();
  }

  updateCurrentProductPrice() {
    if (this.product && this.currentMemoryCapacity) {
      this.currentProductPrice =
        this.product.price + this.currentMemoryCapacity.plusPrice;
    }
  }

  updateTotalProductPrice() {
    this.totalPrice = this.currentProductPrice * this.currentQuantity;
  }

  // change product images
  handleChangeCurrentImageUrl(newImageUrl: string) {
    this.currentImageUrl = newImageUrl;
  }

  // cart services
  addToCart() {
    this.cartService.addToCart({
      product: this.product as TProduct,
      selectedColor: this.currentColor,
      selectedMemory: this.currentMemoryCapacity,
      quantity: this.currentQuantity,
    });
  }
}
