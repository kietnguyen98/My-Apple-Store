import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { CartToggleButtonComponent } from "./components/cart-toggle-button/cart-toggle-button.component";
import { CartSideNavComponent } from "./components/cart-side-nav/cart-side-nav.component";
import { CartItemCardComponent } from "./components/cart-item-card/cart-item-card.component";
import { CartItemQuantitySelectComponent } from "./components/cart-item-quantity-select/cart-item-quantity-select.component";
import { CartAlertDialogComponent } from "./components/cart-alert-dialog/cart-alert-dialog.component";

// services
import { CartService } from "./services/cart.service";

// angular material modules
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatRippleModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatRippleModule,
    MatDialogModule,
  ],
  declarations: [
    //components
    CartToggleButtonComponent,
    CartSideNavComponent,
    CartItemCardComponent,
    CartItemQuantitySelectComponent,
    CartAlertDialogComponent,
  ],
  providers: [CartService],
  exports: [
    //components
    CartToggleButtonComponent,
    CartSideNavComponent,
  ],
})
export class CartModule {}
