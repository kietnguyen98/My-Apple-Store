import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

// app components import
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartComponent } from "./cart/cart.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { ProductCardsComponent } from "./product-cards/product-cards.component";
import { ProductFilterMenuComponent } from "./product-filter-menu/product-filter-menu.component";
import { ScrollTopButtonComponent } from "./scroll-top-button/scroll-top-button.component";
import { ProductListPaginationComponent } from "./product-list-pagination/product-list-pagination.component";
import { ProductMemoriesSelectComponent } from "./product-memories-select/product-memories-select.component";
import { ProductColorsSelectComponent } from "./product-colors-select/product-colors-select.component";
import { ProductQuantitySelectComponent } from "./product-quantity-select/product-quantity-select.component";
import { ProductSubImagesComponent } from "./product-sub-images/product-sub-images.component";
import { ProductsRelatedComponent } from "./products-related/products-related.component";

// angular material components import
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatChipsModule } from "@angular/material/chips";
import { MatSliderModule } from "@angular/material/slider";
import { MatListModule } from "@angular/material/list";
import { MatRadioModule } from "@angular/material/radio";
import { BreadcrumbsBarComponent } from "./breadcrumbs-bar/breadcrumbs-bar.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRippleModule } from "@angular/material/core";
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "products", component: ProductListComponent },
      { path: "products/:productName", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatChipsModule,
    MatSliderModule,
    MatListModule,
    MatRadioModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRippleModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ProductCardsComponent,
    ProductFilterMenuComponent,
    BreadcrumbsBarComponent,
    ScrollTopButtonComponent,
    ProductListPaginationComponent,
    ProductMemoriesSelectComponent,
    ProductColorsSelectComponent,
    ProductQuantitySelectComponent,
    ProductSubImagesComponent,
    ProductsRelatedComponent,
    CarouselComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
