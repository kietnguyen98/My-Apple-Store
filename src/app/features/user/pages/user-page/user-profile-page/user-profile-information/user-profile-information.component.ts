import { AuthService } from "@/app/features/auth/services/auth.service";
import { TUser } from "@/app/features/auth/types";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { dateConvertHelper } from "@/utilities";

@Component({
  selector: "app-user-profile-information",
  templateUrl: "./user-profile-information.component.html",
  styleUrls: ["./user-profile-information.component.css"],
})
export class UserProfileInformationComponent {
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
        avatarUrl: [
          userInfo?.avatarUrl || "",
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(200),
          ]),
        ],
        firstName: [
          userInfo?.fullName.firstName || "",
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(100),
          ]),
        ],
        lastName: [
          userInfo?.fullName.lastName || "",
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(100),
          ]),
        ],
        gender: [
          userInfo?.gender || "",
          Validators.compose([Validators.required]),
        ],
        birthday: [
          dateConvertHelper.toHtmlInputValue(userInfo?.birthday || ""),
          Validators.compose([Validators.required]),
        ],
        address: [
          userInfo?.address || "",
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(100),
          ]),
        ],
        phone: [
          userInfo?.phone || "",
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(100),
          ]),
        ],
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
