import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { HeaderComponent } from "./header.component";
import { HeaderSearchInputComponent } from "./header-search-input/header-search-input.component";
import { CartToggleButtonComponent } from "./cart-toggle-button/cart-toggle-button.component";
import { HeaderUserNavigationMenuComponent } from "./header-user-navigation-menu/header-user-navigation-menu.component";
import { UserAvatarComponent } from "../../user-avatar/user-avatar.component";
import { HeaderNavigationBarComponent } from "./header-navigation-bar/header-navigation-bar.component";

// pipes
import { ProductByCategoryPipe } from "@/app/share/pipes/product-by-category.pipe";

// angular material modules
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRippleModule } from "@angular/material/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatBadgeModule } from "@angular/material/badge";

@NgModule({
  providers: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatRippleModule,
    MatMenuModule,
    MatBadgeModule,
  ],
  declarations: [
    // root
    HeaderComponent,
    // children
    // components
    UserAvatarComponent,
    HeaderUserNavigationMenuComponent,
    HeaderSearchInputComponent,
    CartToggleButtonComponent,
    HeaderNavigationBarComponent,
    // pipes
    ProductByCategoryPipe,
  ],
  exports: [HeaderComponent, UserAvatarComponent],
})
export class TopBarModule {}
