import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// components
import { ProductAlertsComponent } from "./components/product-alerts/product-alerts.component";
import { ProductCardsComponent } from "./components/product-cards/product-cards.component";
import { ProductListPaginationComponent } from "./components/product-list-pagination/product-list-pagination.component";
import { ProductMemoriesSelectComponent } from "./components/product-details/product-memories-select/product-memories-select.component";
import { ProductColorsSelectComponent } from "./components/product-details/product-colors-select/product-colors-select.component";
import { ProductQuantitySelectComponent } from "./components/product-details/product-quantity-select/product-quantity-select.component";
import { ProductSubImagesComponent } from "./components/product-details/product-sub-images/product-sub-images.component";
import { ProductsRelatedComponent } from "./components/product-details/products-related/products-related.component";
import { ProductDescriptionAndRateModule } from "./components/product-details/product-description-and-rate/product-description-and-rate.module";
import { PageSectionNavigationComponent } from "./components/page-section-navigation/page-section-navigation.component";
import { ProductPriceDisplayComponent } from "./components/product-price-display/product-price-display.component";

// local modules
import { ProductFilterMenuModule } from "./components/product-filter-menu/product-filter-menu.module";

// share component
import { ShareModule } from "@/app/share/share.module";

// pages
import { ProductListComponent } from "./pages/product-list/product-list.component";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";

// services
import { ProductService } from "./services/product.service";

// angular material modules
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
  imports: [
    CommonModule,
    ProductFilterMenuModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
    MatCardModule,
    RouterModule,
    MatSidenavModule,
    ShareModule,
    MatButtonModule,
    MatRippleModule,
    ProductDescriptionAndRateModule,
  ],
  declarations: [
    // components
    ProductAlertsComponent,
    ProductCardsComponent,
    ProductListPaginationComponent,
    ProductMemoriesSelectComponent,
    ProductColorsSelectComponent,
    ProductQuantitySelectComponent,
    ProductSubImagesComponent,
    ProductsRelatedComponent,
    PageSectionNavigationComponent,
    ProductPriceDisplayComponent,
    // pages
    ProductListComponent,
    ProductDetailsComponent,
  ],
  providers: [ProductService],
  exports: [
    // pages
    ProductListComponent,
    ProductDetailsComponent,
  ],
})
export class ProductModule {}
