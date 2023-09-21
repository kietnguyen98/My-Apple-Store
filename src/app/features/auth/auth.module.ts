import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// components
import { LoginComponent } from "./pages/login/login.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";

// modules
import { ShareModule } from "@/app/share/share.module";

// services

// angular material modules
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
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
