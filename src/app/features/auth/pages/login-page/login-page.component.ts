import { RouteService } from "@/app/share/services/route.service";
import { Component } from "@angular/core";
import { AuthService, TLoginProps } from "../../services/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotificationSnackBarComponent } from "@/app/share/components/notification-snack-bar/notification-snack-bar.component";
import {
  API_FETCHING_STATE,
  AUTH_QUERY_PARAM_KEYS,
} from "@/app/share/constants";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TFormValidationMessages, TSnackBarProps } from "@/app/share/types";
@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent {
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

  redirectUrl: string = "";
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private routeService: RouteService,
    private authService: AuthService
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

    this.routeService.getLoginQueryParams().subscribe(paramValue => {
      const redirectUrl = paramValue[AUTH_QUERY_PARAM_KEYS.REDIRECT_URL];
      this.redirectUrl = redirectUrl;
    });

    this.authService.getLoginState().subscribe(state => {
      switch (state) {
        case API_FETCHING_STATE.LOADING:
          this.isLoading = true;
          break;
        case API_FETCHING_STATE.SUCCESS:
          this.openSnackBar({ isSuccess: true, message: "login successful !" });
          this.redirect();
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

  redirect() {
    this.routeService.navigateWithUrlOnly({
      path: this.redirectUrl,
    });
  }

  onSubmitForm(payload: { [key: string]: string }) {
    this.authService.getLogin(payload as TLoginProps);
  }
}
