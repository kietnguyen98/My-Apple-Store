import { Component, OnInit } from "@angular/core";

import { CartService } from "../../service/cart.service";
import { TCartItems } from "@/types";

@Component({
  selector: "app-cart-side-nav",
  templateUrl: "./cart-side-nav.component.html",
  styleUrls: ["./cart-side-nav.component.css"],
})
export class CartSideNavComponent implements OnInit {
  items: TCartItems = [];
  isOpened: boolean = false;
  currentScrollYPosition: number = 0;
  totalItems: number = 0;
  totalPrices: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    const sidenav = document.getElementById("cart-sidenav") as HTMLElement;

    this.cartService.getItems().subscribe(cartItems => {
      this.items = cartItems;

      this.totalItems = this.items.reduce(
        (prev, item) => prev + item.quantity,
        0
      );

      this.totalPrices = this.items.reduce(
        (prev, item) =>
          prev +
          item.quantity *
            (item.product.price + (item.selectedMemory?.plusPrice || 0)),
        0
      );
    });

    this.cartService.getSidenavState().subscribe(state => {
      this.isOpened = state;

      if (this.isOpened) {
        sidenav.classList.add("sticky-sidenav");
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";
      } else {
        sidenav.classList.remove("sticky-sidenav");
        document.body.style.overflow = "auto";
        document.body.style.touchAction = "auto";
      }
    });
  }
}
