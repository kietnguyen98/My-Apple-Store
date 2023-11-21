import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// components
import { UserNavigateMenuComponent } from "./components/user-navigate-menu/user-navigate-menu.component";
import { UserPageTitleBadgeComponent } from "./components/user-page-title-badge/user-page-title-badge.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { UserPurchasesPageComponent } from "./pages/user-purchases-page/user-purchases-page.component";
import { UserLoveListPageComponent } from "./pages/user-love-list-page/user-love-list-page.component";
import { LovedProductCardComponent } from "./pages/user-love-list-page/loved-product-card/loved-product-card.component";
import { UserProfilePageComponent } from "./pages/user-profile-page/user-profile-page.component";
import { UserProfileAccountComponent } from "./pages/user-profile-page/user-profile-account/user-profile-account.component";
import { UserProfileInformationComponent } from "./pages/user-profile-page/user-profile-information/user-profile-information.component";

// local modules
import { ShareModule } from "@/app/share/share.module";

// angular material modules
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatRippleModule } from "@angular/material/core";
import { MatTabsModule } from "@angular/material/tabs";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";

// services
import { LovedProductsService } from "./services/loved-products.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    // angular material module
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatTabsModule,
    MatRadioModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  declarations: [
    // components
    UserNavigateMenuComponent,
    UserPageTitleBadgeComponent,
    LovedProductCardComponent,
    // pages
    UserPageComponent,
    UserProfilePageComponent,
    UserProfileAccountComponent,
    UserProfileInformationComponent,
    UserPurchasesPageComponent,
    UserLoveListPageComponent,
  ],
  providers: [LovedProductsService],
  exports: [
    //pages
    UserPageComponent,
    UserPurchasesPageComponent,
    UserLoveListPageComponent,
  ],
})
export class UserModule {}
