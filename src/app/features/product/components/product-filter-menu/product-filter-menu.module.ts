import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { ProductFilterCategoriesComponent } from "./product-filter-categories/product-filter-categories.component";
import { ProductFilterPricesComponent } from "./product-filter-prices/product-filter-prices.component";
import { ProductSortByPricesComponent } from "./product-sort-by-prices/product-sort-by-prices.component";
import { ProductFilterMenuComponent } from "./product-filter-menu.component";
import { ProductFilterStatusComponent } from "./product-filter-status/product-filter-status.component";

// services
import { ProductService } from "../../services/product.service";

// angular material modules
import { MatChipsModule } from "@angular/material/chips";
import { MatSliderModule } from "@angular/material/slider";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatSliderModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  declarations: [
    // root
    ProductFilterMenuComponent,
    // children
    ProductFilterStatusComponent,
    ProductFilterCategoriesComponent,
    ProductFilterPricesComponent,
    ProductSortByPricesComponent,
  ],
  providers: [ProductService],
  exports: [ProductFilterMenuComponent],
})
export class ProductFilterMenuModule {}
