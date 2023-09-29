import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { UserPageComponent } from "./pages/user-page/user-page.component";
import { UserNavigateMenuComponent } from "./components/user-navigate-menu/user-navigate-menu.component";

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
    ShareModule,
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
  ],
  providers: [],
  exports: [
    //pages
    UserPageComponent,
  ],
})
export class UserModule {}
