import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TProduct, TProducts } from "@/types";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: TProducts = [];

  constructor(private httpClient: HttpClient) {}

  addToCart(product: TProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get<Array<{ type: string; price: number }>>(
      "/assets/shipping.json"
    );
  }
}
