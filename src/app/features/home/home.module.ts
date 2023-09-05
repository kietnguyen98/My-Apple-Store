import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { HomeBannerComponent } from "./components/home-banner/home-banner.component";
import { HomeProductBubbleComponent } from "./components/home-product-bubble/home-product-bubble.component";
import { HomeFlashSaleComponent } from "./components/home-flash-sale/home-flash-sale.component";
import { HomeProductExhibitionsComponent } from "./components/home-product-exhibitions/home-product-exhibitions.component";

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
    HomeProductBubbleComponent,
    HomeFlashSaleComponent,
    HomeProductExhibitionsComponent,
    // pages
    HomeComponent,
  ],
  exports: [
    // pages
    HomeComponent,
  ],
})
export class HomeModule {}
