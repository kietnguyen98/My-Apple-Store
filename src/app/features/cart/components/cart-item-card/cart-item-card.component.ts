import { TCartItem } from "@/types";
import { Component, Input } from "@angular/core";
import { CartService } from "../../service/cart.service";
import { Router } from "@angular/router";
import { PATH } from "@/configs/routes";
import { MatDialog } from "@angular/material/dialog";
import { CartAlertDialogComponent } from "../cart-alert-dialog/cart-alert-dialog.component";

@Component({
  selector: "app-cart-item-card",
  templateUrl: "./cart-item-card.component.html",
  styleUrls: ["./cart-item-card.component.css"],
})
export class CartItemCardComponent {
  @Input() item: TCartItem | undefined;

  constructor(
    private cartService: CartService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  removeItem() {
    this.cartService.removeItem(this.item?.id as string);
  }

  openDialog() {
    this.dialog.open(CartAlertDialogComponent, {
      disableClose: true,
      hasBackdrop: false,
      width: "360px",
      data: {
        title: "Confirm remove item",
        content:
          "This item will be removed from the cart, Do you want to continue processing ?",
        handleConfirm: () => this.removeItem(),
      },
    });
  }

  onGetDetailProduct() {
    this.router
      .navigateByUrl("/dummy", { skipLocationChange: true })
      .then(() => {
        this.router.navigate([PATH.LIST_PRODUCTS, this.item?.product?.name]);
        window.scrollTo(0, 0);
      });

    // close sidenav when navigate to detail product page
    this.cartService.toggleSidenav();
  }
}
