import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { CartToggleButtonComponent } from "./components/cart-toggle-button/cart-toggle-button.component";

// services
import { CartService } from "./service/cart.service";

// angular material modules
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, MatBadgeModule],
  declarations: [
    //components
    CartToggleButtonComponent,
  ],
  providers: [CartService],
  exports: [
    //components
    CartToggleButtonComponent,
  ],
})
export class CartModule {}
