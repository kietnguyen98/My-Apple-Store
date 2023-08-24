import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// components
import { ProductAlertsComponent } from "./components/product-alerts/product-alerts.component";
import { ProductCardsComponent } from "./components/product-cards/product-cards.component";
import { ProductFilterMenuComponent } from "./components/product-filter-menu/product-filter-menu.component";
import { ProductListPaginationComponent } from "./components/product-list-pagination/product-list-pagination.component";
import { ProductMemoriesSelectComponent } from "./components/product-memories-select/product-memories-select.component";
import { ProductColorsSelectComponent } from "./components/product-colors-select/product-colors-select.component";
import { ProductQuantitySelectComponent } from "./components/product-quantity-select/product-quantity-select.component";
import { ProductSubImagesComponent } from "./components/product-sub-images/product-sub-images.component";
import { ProductsRelatedComponent } from "./components/products-related/products-related.component";
import { ProductDescriptionAndRateModule } from "./components/product-description-and-rate/product-description-and-rate.module";

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
import { MatSliderModule } from "@angular/material/slider";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
    MatSliderModule,
    MatRadioModule,
    MatCardModule,
    RouterModule,
    MatSidenavModule,
    ShareModule,
    MatButtonModule,
    ProductDescriptionAndRateModule,
  ],
  declarations: [
    // components
    ProductAlertsComponent,
    ProductCardsComponent,
    ProductFilterMenuComponent,
    ProductListPaginationComponent,
    ProductMemoriesSelectComponent,
    ProductColorsSelectComponent,
    ProductQuantitySelectComponent,
    ProductSubImagesComponent,
    ProductsRelatedComponent,
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
