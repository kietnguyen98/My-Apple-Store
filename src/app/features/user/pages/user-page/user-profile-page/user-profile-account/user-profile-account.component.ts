import { AuthService } from "@/app/features/auth/services/auth.service";
import { TUser } from "@/app/features/auth/types";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user-profile-account",
  templateUrl: "./user-profile-account.component.html",
  styleUrls: ["./user-profile-account.component.css"],
})
export class UserProfileAccountComponent {
  user: TUser | undefined;
  formGroup: FormGroup = this.formBuilder.group({});
  isEdit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.authService.getUser().subscribe((userInfo: TUser | undefined) => {
      this.user = userInfo;

      this.formGroup = this.formBuilder.group({
        username: [
          userInfo?.username || "",
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(100),
          ]),
        ],
        password: [
          userInfo?.password || "",
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(100),
          ]),
        ],
        newPassword: ["", Validators.compose([Validators.required])],
        confirmNewPassword: ["", Validators.compose([Validators.required])],
      });
    });

    this.formGroup.disable();
  }

  toggleIsEdit() {
    this.isEdit = !this.isEdit;
    if (this.formGroup.disabled) {
      this.formGroup.enable();
    } else {
      this.formGroup.disable();
    }
  }
}
