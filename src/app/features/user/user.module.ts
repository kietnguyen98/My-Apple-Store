import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// components
import { UserNavigateMenuComponent } from "./components/user-navigate-menu/user-navigate-menu.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { UserProfilePageComponent } from "./pages/user-page/user-profile-page/user-profile-page.component";
import { UserPurchasesPageComponent } from "./pages/user-page/user-purchases-page/user-purchases-page.component";
import { UserLoveListPageComponent } from "./pages/user-page/user-love-list-page/user-love-list-page.component";
import { MatTabsModule } from "@angular/material/tabs";

// local modules
import { ShareModule } from "@/app/share/share.module";

// angular material modules
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatTabsModule,
  ],
  declarations: [
    // components
    UserNavigateMenuComponent,
    // pages
    UserPageComponent,
    UserProfilePageComponent,
    UserPurchasesPageComponent,
    UserLoveListPageComponent,
  ],
  providers: [],
  exports: [
    //pages
    UserPageComponent,
    UserProfilePageComponent,
    UserPurchasesPageComponent,
    UserLoveListPageComponent,
  ],
})
export class UserModule {}
