import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { TCartItems } from "../../cart/types";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  purchasedItems: TCartItems = [];
  purchasedItemsSubject = new BehaviorSubject<TCartItems>(this.purchasedItems);
  shippingPrice: number = 0;
  shippingPriceSubject = new BehaviorSubject<number>(this.shippingPrice);
  purchaseDiscount: number = 0;
  purchaseDiscountSubject = new BehaviorSubject<number>(this.purchaseDiscount);

  constructor() {}

  updatePurchasedItems(newItems: TCartItems) {
    this.purchasedItems = newItems;
    this.purchasedItemsSubject.next(newItems);
  }

  getPurchasedItems(): Observable<TCartItems> {
    return this.purchasedItemsSubject.asObservable();
  }

  updateShippingPrice(data: number) {
    this.shippingPrice = data;
    this.shippingPriceSubject.next(this.shippingPrice);
  }

  getShippingPrice(): Observable<number> {
    return this.shippingPriceSubject.asObservable();
  }
}
