import { products } from "@/data/products";
import { TProducts } from "@/types";
import { Component } from "@angular/core";

@Component({
  selector: "app-home-flash-sale-products",
  templateUrl: "./home-flash-sale-products.component.html",
  styleUrls: ["./home-flash-sale-products.component.css"],
})
export class HomeFlashSaleProductsComponent {
  products: TProducts = products;
}
