import { Component, OnInit } from "@angular/core";

import { CartService } from "../../services/cart.service";
import { PATH } from "@/app/share/configs";
import { RouteService } from "@/app/share/services/route.service";
import { TCartItems } from "../../types";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { cartHelper } from "@/utilities";
@Component({
  selector: "app-cart-side-nav",
  templateUrl: "./cart-side-nav.component.html",
  styleUrls: ["./cart-side-nav.component.css"],
})
export class CartSideNavComponent implements OnInit {
  isCheckedAll: boolean = false;
  checkedItemNumb: number = 0;
  items: TCartItems = [];
  isOpened: boolean = false;
  currentScrollYPosition: number = 0;
  totalItems: number = 0;
  totalPrices: number = 0;

  constructor(
    private cartService: CartService,
    private routeService: RouteService
  ) {
    this.cartService.getItems().subscribe(cartItems => {
      this.items = cartItems;

      this.totalItems = this.items.reduce(
        (prev, item) => prev + item.quantity,
        0
      );

      this.checkedItemNumb = this.items.reduce(
        (prev, item) => prev + (item.checked ? item.quantity : 0),
        0
      );

      this.totalPrices = cartHelper.getTotalExactPrice(this.items);

      this.isCheckedAll = this.items.every(item => item.checked);
    });
  }

  ngOnInit(): void {
    const sidenav = document.getElementById("cart-sidenav") as HTMLElement;

    this.cartService.getSidenavState().subscribe(state => {
      this.isOpened = state;

      if (this.isOpened) {
        sidenav.classList.add("sticky-sidenav");
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";
      } else {
        // set delay time to wait for sidenav's animation complete
        setTimeout(() => {
          sidenav.classList.remove("sticky-sidenav");
          document.body.style.overflow = "initial";
          document.body.style.touchAction = "auto";
        }, 300);
      }
    });
  }

  onGetProductPage() {
    this.routeService.navigateWithUrlOnly({ path: PATH.PRODUCTS });
  }

  checkAllItems(event: MatCheckboxChange) {
    if (event.checked) {
      this.cartService.checkAllItems();
    } else {
      this.cartService.unCheckAllItems();
    }
  }

  toPayment() {
    this.cartService.getPayment();
  }
}
