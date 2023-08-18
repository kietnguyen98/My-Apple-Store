import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../data/products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Array<IProduct> = [];

  constructor(private httpClient: HttpClient) {}

  addToCart(product: IProduct) {
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
