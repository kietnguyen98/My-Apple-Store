import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { BreadcrumbsBarComponent } from "./components/breadcrumbs-bar/breadcrumbs-bar.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ScrollTopButtonComponent } from "./components/scroll-top-button/scroll-top-button.component";
import { TopBarComponent } from "./components/top-bar/top-bar.component";

// modules
import { CartModule } from "../features/cart/cart.module";

// angular material modules
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    CartModule,
  ],
  declarations: [
    BreadcrumbsBarComponent,
    CarouselComponent,
    ScrollTopButtonComponent,
    TopBarComponent,
  ],
  exports: [
    BreadcrumbsBarComponent,
    CarouselComponent,
    ScrollTopButtonComponent,
    TopBarComponent,
  ],
})
export class ShareModule {}
