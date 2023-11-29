import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// components
import { LoginComponent } from "./pages/login-page/login-page.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { LoginPopupComponent } from "./components/login-popup/login-popup.component";

// modules
import { ShareModule } from "@/app/share/share.module";

// services

// angular material modules
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  declarations: [
    //components
    LoginPopupComponent,
    //pages
    LoginComponent,
    SignUpComponent,
  ],
  exports: [
    //pages
    LoginComponent,
    SignUpComponent,
  ],
})
export class AuthModule {}
