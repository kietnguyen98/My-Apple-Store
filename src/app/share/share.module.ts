import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { BreadcrumbsBarComponent } from "./components/breadcrumbs-bar/breadcrumbs-bar.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ScrollTopButtonComponent } from "./components/scroll-top-button/scroll-top-button.component";
import { NotificationSnackBarComponent } from "./components/notification-snack-bar/notification-snack-bar.component";
import { CustomFormControlComponent } from "./components/custom-form-control/custom-form-control.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// modules
import { TopBarModule } from "./components/top-bar/top-bar.module";

// angular material modules
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

// configuration
import { SNACK_BAR_CONFIG_OPTION } from "@/configs/snack-bar";
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
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    TopBarModule,
  ],
  declarations: [
    BreadcrumbsBarComponent,
    CarouselComponent,
    ScrollTopButtonComponent,
    NotificationSnackBarComponent,
    CustomFormControlComponent,
  ],
  exports: [
    BreadcrumbsBarComponent,
    CarouselComponent,
    ScrollTopButtonComponent,
    TopBarModule,
    CustomFormControlComponent,
  ],
})
export class ShareModule {}
