import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IMemoryCapacity } from "@/data/memory";
import { IColor } from "@/data/colors";
import { IProduct, products } from "../../data/products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  currentImageUrl: string | undefined = "";
  currentMemoryCapacity: IMemoryCapacity | undefined;
  currentColor: IColor | undefined;
  currentProductPrice: number = 0;
  currentQuantity: number = 1;
  totalPrice: number = 0;
  listRelatedProducts: Array<IProduct> = [];

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

  handleChangeMemoryCapacity(newValue: IMemoryCapacity) {
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

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart !");
  }
}
