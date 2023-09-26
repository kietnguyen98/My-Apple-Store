import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// component
import { ProductDescriptionComponent } from "./product-description/product-description.component";
import { ProductRatingComponent } from "./product-rating/product-rating.component";
import { ProductDescriptionAndRateComponent } from "./product-description-and-rate.component";

// angular material module
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  imports: [CommonModule, MatTabsModule],
  declarations: [
    ProductDescriptionComponent,
    ProductRatingComponent,
    ProductDescriptionAndRateComponent,
  ],
  exports: [ProductDescriptionAndRateComponent],
})
export class ProductDescriptionAndRateModule {}
