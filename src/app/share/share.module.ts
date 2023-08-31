import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { BreadcrumbsBarComponent } from "./components/breadcrumbs-bar/breadcrumbs-bar.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ScrollTopButtonComponent } from "./components/scroll-top-button/scroll-top-button.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { NotificationSnackBarComponent } from "./components/notification-snack-bar/notification-snack-bar.component";

// modules
import { CartModule } from "../features/cart/cart.module";

// angular material modules
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";

// configuration
import { SNACK_BAR_CONFIG_OPTION } from "@/configs/snack-bar";
@NgModule({
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: SNACK_BAR_CONFIG_OPTION,
    },
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    CartModule,
    MatSnackBarModule,
  ],
  declarations: [
    BreadcrumbsBarComponent,
    CarouselComponent,
    ScrollTopButtonComponent,
    TopBarComponent,
    NotificationSnackBarComponent,
  ],
  exports: [
    BreadcrumbsBarComponent,
    CarouselComponent,
    ScrollTopButtonComponent,
    TopBarComponent,
  ],
})
export class ShareModule {}
