import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { NotificationSnackBarComponent } from "@/app/share/components/notification-snack-bar/notification-snack-bar.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TSnackBarProps } from "@/app/share/types";
import { TCartItems } from "../types";
import { TColor, TMemoryCapacity, TProduct } from "../../product/types";
import { RouteService } from "@/app/share/services/route.service";

type TAddToCartProps = {
  product: TProduct;
  selectedColor?: TColor;
  selectedMemory?: TMemoryCapacity;
  quantity: number;
};

type TChangeItemQuantityProps = {
  itemId: string;
  value: number;
};

@Injectable({
  providedIn: "root",
})
export class CartService {
  isSidenavOpened: boolean = false;
  isSidenavOpenedSubject = new Subject<boolean>();
  items: TCartItems = [];
  itemsSubject = new Subject<TCartItems>();

  // cart snackbar init
  constructor(
    private snackBar: MatSnackBar,
    private routeService: RouteService
  ) {
    this.routeService.getCurrentPath().subscribe(() => {
      this.closeSidenav();
    });
  }

  openSnackBar({ isSuccess, message }: TSnackBarProps) {
    this.snackBar.openFromComponent(NotificationSnackBarComponent, {
      data: {
        isSuccess: isSuccess,
        message: message,
      },
    });
  }

  // cart sidenav
  getSidenavState(): Observable<boolean> {
    return this.isSidenavOpenedSubject.asObservable();
  }

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
    this.isSidenavOpenedSubject.next(this.isSidenavOpened);
  }

  closeSidenav() {
    this.isSidenavOpened = false;
    this.isSidenavOpenedSubject.next(this.isSidenavOpened);
  }

  // cart items
  getItems(): Observable<TCartItems> {
    return this.itemsSubject.asObservable();
  }

  addToCart({
    product,
    selectedColor,
    selectedMemory,
    quantity,
  }: TAddToCartProps) {
    // check if new itemCart has the same product id & selected color & selected memory -> increase quantity only
    // if there is not the same exist -> create new item
    let isExist: boolean = false;

    this.items.forEach(item => {
      if (
        item.product.id === product.id &&
        item.selectedColor?.id === selectedColor?.id &&
        item.selectedMemory?.id === selectedMemory?.id
      ) {
        isExist = true;
      }
    });

    if (isExist) {
      this.items = this.items.map(item => {
        if (
          item.product.id === product.id &&
          item.selectedColor?.id === selectedColor?.id &&
          item.selectedMemory?.id === selectedMemory?.id
        ) {
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });
    } else {
      this.items.push({
        id: uuidv4(),
        product: product,
        selectedColor: selectedColor ? selectedColor : undefined,
        selectedMemory: selectedMemory ? selectedMemory : undefined,
        quantity: quantity,
      });
    }

    this.itemsSubject.next(this.items);
    this.openSnackBar({
      isSuccess: true,
      message: "Add item to cart successful !",
    });
  }

  changeItemQuantity({ itemId, value }: TChangeItemQuantityProps) {
    this.items = this.items.map(item => {
      if (item.id === itemId) return { ...item, quantity: value };
      return item;
    });
    this.itemsSubject.next(this.items);
  }

  removeItem(itemId: string) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.itemsSubject.next(this.items);
    this.openSnackBar({ isSuccess: true, message: "Remove item successful !" });
  }
}
