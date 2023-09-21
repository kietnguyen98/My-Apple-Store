import { RouteService } from "@/app/share/services/route.service";
import { Component } from "@angular/core";
import { AuthService, TLoginProps } from "../../services/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TFormValidationMessages, TSnackBarProps } from "@/types";
import { NotificationSnackBarComponent } from "@/app/share/components/notification-snack-bar/notification-snack-bar.component";
import { API_FETCHING_STATE } from "@/constants";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm: FormGroup;
  VALIDATION_MESSAGES: TFormValidationMessages = {
    userName: {
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

  redirectUrl: string = "";
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private routeService: RouteService,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      userName: [
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

    this.routeService
      .getRedirectUrl()
      .subscribe(paramValue => (this.redirectUrl = paramValue as string));

    this.authService.getAuthState().subscribe(state => {
      switch (state) {
        case API_FETCHING_STATE.LOADING:
          this.isLoading = true;
          break;
        case API_FETCHING_STATE.SUCCESS:
          this.openSnackBar({ isSuccess: true, message: "login successful !" });
          this.resetFormState();
          this.redirect();
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
    this.authService.updateAuthState(API_FETCHING_STATE.IDLE);
  }

  openSnackBar({ isSuccess, message }: TSnackBarProps) {
    this.snackBar.openFromComponent(NotificationSnackBarComponent, {
      data: {
        isSuccess: isSuccess,
        message: message,
      },
    });
  }

  redirect() {
    this.routeService.navigateWithUrlOnly({
      path: this.redirectUrl,
    });
  }

  onSubmitForm(payload: { [key: string]: string }) {
    this.authService.getLogin(payload as TLoginProps);
  }
}
