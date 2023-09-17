import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// components
import { LoginComponent } from "./pages/login/login.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";

// modules

// services

// angular material modules

@NgModule({
  imports: [CommonModule],
  declarations: [
    //components
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
