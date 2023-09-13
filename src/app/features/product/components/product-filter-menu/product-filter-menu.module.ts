import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { ProductFilterCategoriesComponent } from "./product-filter-categories/product-filter-categories.component";
import { ProductFilterPricesComponent } from "./product-filter-prices/product-filter-prices.component";
import { ProductSortByPricesComponent } from "./product-sort-by-prices/product-sort-by-prices.component";
import { ProductFilterMenuComponent } from "./product-filter-menu.component";

// services
import { ProductService } from "../../services/product.service";

// angular material modules
import { MatChipsModule } from "@angular/material/chips";
import { MatSliderModule } from "@angular/material/slider";
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  imports: [CommonModule, MatChipsModule, MatSliderModule, MatRadioModule],
  declarations: [
    // root
    ProductFilterMenuComponent,
    // children
    ProductFilterCategoriesComponent,
    ProductFilterPricesComponent,
    ProductSortByPricesComponent,
  ],
  providers: [ProductService],
  exports: [ProductFilterMenuComponent],
})
export class ProductFilterMenuModule {}
