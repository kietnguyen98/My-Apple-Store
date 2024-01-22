import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { BreadcrumbsBarComponent } from "./components/breadcrumbs-bar/breadcrumbs-bar.component";
import { ScrollTopButtonComponent } from "./components/layout/scroll-top-button/scroll-top-button.component";
import { NotificationSnackBarComponent } from "./components/notification-snack-bar/notification-snack-bar.component";
import { CustomFormControlComponent } from "./components/custom-form-control/custom-form-control.component";
import { ProductPriceDisplayComponent } from "./components/product-price-display/product-price-display.component";
import { ProductListPaginationComponent } from "./components/product-list-pagination/product-list-pagination.component";
import { ItemQuantitySelectComponent } from "./components/item-quantity-select/item-quantity-select.component";
import { AlertDialogComponent } from "./components/alert-dialog/alert-dialog.component";

// modules
import { TopBarModule } from "./components/layout/header/header.module";
import { FooterModule } from "./components/layout/footer/footer.module";

// angular material modules
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// configuration
import { SNACK_BAR_CONFIG_OPTION } from "@/app/share/configs";
@NgModule({
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: SNACK_BAR_CONFIG_OPTION,
    },
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    TopBarModule,
    FooterModule,
  ],
  declarations: [
    // components
    BreadcrumbsBarComponent,
    ScrollTopButtonComponent,
    NotificationSnackBarComponent,
    CustomFormControlComponent,
    ProductPriceDisplayComponent,
    ProductListPaginationComponent,
    ItemQuantitySelectComponent,
    AlertDialogComponent,
  ],
  exports: [
    // components
    BreadcrumbsBarComponent,
    ScrollTopButtonComponent,
    TopBarModule,
    FooterModule,
    CustomFormControlComponent,
    ProductPriceDisplayComponent,
    ProductListPaginationComponent,
    ItemQuantitySelectComponent,
    AlertDialogComponent,
  ],
})
export class ShareModule {}
