import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TProduct, TMemoryCapacity, TColor, TProducts } from "@/types";
import { products } from "@/data/products";
import { CartService } from "@/app/features/cart/service/cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
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
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productNameFromRoute = routeParams.get("productName");

    this.product = products.find(
      product => product.name === productNameFromRoute
    );

    this.currentImageUrl = this.product?.imageUrl;
    this.currentMemoryCapacity = this.product?.memoryCapacities?.[0];
    this.currentColor = this.product?.colors?.[0];
    this.updateCurrentProductPrice();
    this.updateTotalProductPrice();

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
    this.updateCurrentProductPrice();
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

  addToCart(product: TProduct) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart !");
  }
}
