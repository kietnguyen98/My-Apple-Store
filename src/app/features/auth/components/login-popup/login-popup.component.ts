import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService, TLoginProps } from "../../services/auth.service";
import { API_FETCHING_STATE } from "@/app/share/constants";
import { NotificationSnackBarComponent } from "@/app/share/components/notification-snack-bar/notification-snack-bar.component";
import { MatDialogRef } from "@angular/material/dialog";
import { TFormValidationMessages, TSnackBarProps } from "@/app/share/types";

@Component({
  selector: "app-login-popup",
  templateUrl: "./login-popup.component.html",
  styleUrls: ["./login-popup.component.css"],
})
export class LoginPopupComponent {
  loginForm: FormGroup;
  VALIDATION_MESSAGES: TFormValidationMessages = {
    username: {
      required: "This field is required",
      minlength:
        "The user name length must be greater than or equal to 6 characters",
      maxlength:
        "The user name length must be less than or equal to 12 characters",
    },
    password: {
      required: "This field is required",
      minlength:
        "The password length must be greater than or equal to 8 characters",
      maxlength:
        "The password length must be less than or equal to 15 characters",
    },
  };

  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private dialogRef: MatDialogRef<LoginPopupComponent>
  ) {
    this.loginForm = this.formBuilder.group({
      username: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
        ]),
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
        ]),
      ],
    });

    this.authService.getLoginState().subscribe(state => {
      switch (state) {
        case API_FETCHING_STATE.LOADING:
          this.isLoading = true;
          break;
        case API_FETCHING_STATE.SUCCESS:
          this.openSnackBar({ isSuccess: true, message: "login successful !" });
          this.closeDialog();
          this.resetFormState();
          break;
        case API_FETCHING_STATE.ERROR:
          this.openSnackBar({
            isSuccess: false,
            message: "login failed, check you inputs then retry !",
          });
          this.resetFormState();
          break;
        default:
          break;
      }
    });
  }

  resetFormState() {
    this.isLoading = false;
    this.authService.updateLoginState(API_FETCHING_STATE.IDLE);
  }

  openSnackBar({ isSuccess, message }: TSnackBarProps) {
    this.snackBar.openFromComponent(NotificationSnackBarComponent, {
      data: {
        isSuccess: isSuccess,
        message: message,
      },
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmitForm(payload: { [key: string]: string }) {
    this.authService.getLogin(payload as TLoginProps);
  }
}
