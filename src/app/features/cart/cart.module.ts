import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { CartSideNavComponent } from "./components/cart-side-nav/cart-side-nav.component";
import { CartItemCardComponent } from "./components/cart-item-card/cart-item-card.component";
import { CartItemQuantitySelectComponent } from "./components/cart-item-quantity-select/cart-item-quantity-select.component";
import { CartAlertDialogComponent } from "./components/cart-alert-dialog/cart-alert-dialog.component";

// services
import { CartService } from "./services/cart.service";

// modules
import { ShareModule } from "@/app/share/share.module";

// angular material modules
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatRippleModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatRippleModule,
    MatDialogModule,
  ],
  declarations: [
    //components
    CartSideNavComponent,
    CartItemCardComponent,
    CartItemQuantitySelectComponent,
    CartAlertDialogComponent,
  ],
  providers: [CartService],
  exports: [
    //components
    CartSideNavComponent,
  ],
})
export class CartModule {}
