import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// components
import { UserNavigateMenuComponent } from "./components/user-navigate-menu/user-navigate-menu.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { UserPurchasesPageComponent } from "./pages/user-page/user-purchases-page/user-purchases-page.component";
import { UserLoveListPageComponent } from "./pages/user-page/user-love-list-page/user-love-list-page.component";

// local modules
import { ShareModule } from "@/app/share/share.module";
import { UserProfilePageModule } from "./pages/user-page/user-profile-page/user-profile-page.module";

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
    UserProfilePageModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
  ],
  declarations: [
    // components
    UserNavigateMenuComponent,
    // pages
    UserPageComponent,
    UserPurchasesPageComponent,
    UserLoveListPageComponent,
  ],
  providers: [],
  exports: [
    //pages
    UserPageComponent,
    UserPurchasesPageComponent,
    UserLoveListPageComponent,
  ],
})
export class UserModule {}
