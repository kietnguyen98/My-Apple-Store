import { TCartItem } from "@/types";
import { Component, Input } from "@angular/core";
import { CartService } from "../../service/cart.service";
import { PATH } from "@/configs/routes";
import { MatDialog } from "@angular/material/dialog";
import { CartAlertDialogComponent } from "../cart-alert-dialog/cart-alert-dialog.component";
import { RouteService } from "@/app/share/services/route.service";

@Component({
  selector: "app-cart-item-card",
  templateUrl: "./cart-item-card.component.html",
  styleUrls: ["./cart-item-card.component.css"],
})
export class CartItemCardComponent {
  @Input() item: TCartItem | undefined;

  constructor(
    private cartService: CartService,
    private routeService: RouteService,
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
    this.routeService.navigateWithUrlOnly({
      path: [PATH.LIST_PRODUCTS, this.item?.product.name as string],
      reload: true,
    });

    // close sidenav when navigate to detail product page
    this.cartService.toggleSidenav();
  }
}
