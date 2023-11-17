import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { UserProfileInformationComponent } from "./user-profile-information/user-profile-information.component";
import { UserProfileAccountComponent } from "./user-profile-account/user-profile-account.component";
import { UserProfilePageComponent } from "./user-profile-page.component";
import { UserPageTitleBadgeComponent } from "../../../components/user-page-title-badge/user-page-title-badge.component";

// modules
import { ShareModule } from "@/app/share/share.module";

// angular material modules
import { MatTabsModule } from "@angular/material/tabs";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    // components
    UserPageTitleBadgeComponent,
    UserProfileAccountComponent,
    UserProfileInformationComponent,
    // pages
    UserProfilePageComponent,
  ],
  providers: [],
  exports: [
    // pages
    UserProfilePageComponent,
  ],
})
export class UserProfilePageModule {}
