import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { TCartItems } from "../../cart/types";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  purchasedItems: TCartItems = [];
  purchasedItemsSubject = new BehaviorSubject<TCartItems>([]);

  constructor() {}

  updatePurchasedItems(newItems: TCartItems) {
    this.purchasedItems = newItems;
    this.purchasedItemsSubject.next(newItems);
  }

  getPurchasedItems(): Observable<TCartItems> {
    return this.purchasedItemsSubject.asObservable();
  }
}
