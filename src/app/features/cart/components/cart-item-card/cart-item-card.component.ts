import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { PATH } from "@/app/share/configs";
import { MatDialog } from "@angular/material/dialog";
import { CartAlertDialogComponent } from "../cart-alert-dialog/cart-alert-dialog.component";
import { RouteService } from "@/app/share/services/route.service";
import { productHelper } from "@/utilities";
import { TCartItem } from "../../types";

@Component({
  selector: "app-cart-item-card",
  templateUrl: "./cart-item-card.component.html",
  styleUrls: ["./cart-item-card.component.css"],
})
export class CartItemCardComponent implements OnChanges {
  @Input() item: TCartItem | undefined;
  totalPrice: number = 0;

  constructor(
    private cartService: CartService,
    private routeService: RouteService,
    private dialog: MatDialog
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["item"].currentValue) {
      const product = changes["item"].currentValue.product;
      const selectedMemory = changes["item"].currentValue.selectedMemory;
      const quantity = changes["item"].currentValue.quantity;
      if (product.salePercentage) {
        this.totalPrice =
          productHelper.getSalePrice(product, selectedMemory) * quantity;
      } else {
        this.totalPrice =
          productHelper.getOriginalPrice(product, selectedMemory) * quantity;
      }
    }
  }

  removeItem() {
    this.cartService.removeItem(this.item?.id as string);
  }

  openDialog() {
    this.dialog.open(CartAlertDialogComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: "22.5rem",
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
      path: [PATH.PRODUCTS, this.item?.product.name as string],
      reload: true,
    });

    // close sidenav when navigate to detail product page
    this.cartService.toggleSidenav();
  }
}
