import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { HomeBannerComponent } from "./components/home-banner/home-banner.component";
import { HomeFlashSaleClockComponent } from "./components/home-flash-sale-clock/home-flash-sale-clock.component";
import { HomeProductExhibitionsComponent } from "./components/home-product-exhibitions/home-product-exhibitions.component";
import { HomeCategoryShortcutComponent } from "./components/home-category-shortcut/home-category-shortcut.component";
import { HomeFlashSaleProductsComponent } from "./components/home-flash-sale-products/home-flash-sale-products.component";

// pages
import { HomeComponent } from "./pages/home/home.component";

// angular material modules
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [
    //components
    HomeBannerComponent,
    HomeFlashSaleClockComponent,
    HomeCategoryShortcutComponent,
    HomeProductExhibitionsComponent,
    HomeFlashSaleProductsComponent,
    // pages
    HomeComponent,
  ],
  exports: [
    // pages
    HomeComponent,
  ],
})
export class HomeModule {}
