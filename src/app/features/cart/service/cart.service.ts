import { Injectable } from "@angular/core";
import { TCartItems, TColor, TMemoryCapacity, TProduct } from "@/types";
import { Observable, Subject } from "rxjs";
import { v4 as uuidv4 } from "uuid";

type TAddToCartProps = {
  product: TProduct;
  selectedColor?: TColor;
  selectedMemory?: TMemoryCapacity;
  quantity: number;
};
@Injectable({
  providedIn: "root",
})
export class CartService {
  items: TCartItems = [];
  itemsSubject = new Subject<TCartItems>();

  getItems(): Observable<TCartItems> {
    return this.itemsSubject.asObservable();
  }

  addToCart({
    product,
    selectedColor,
    selectedMemory,
    quantity,
  }: TAddToCartProps) {
    this.items.push({
      id: uuidv4(),
      product: product,
      selectedColor: selectedColor ? selectedColor : undefined,
      selectedMemory: selectedMemory ? selectedMemory : undefined,
      quantity: quantity,
    });

    this.itemsSubject.next(this.items);
  }
}
