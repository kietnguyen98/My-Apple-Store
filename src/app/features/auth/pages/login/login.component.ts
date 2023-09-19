import { RouteService } from "@/app/share/services/route.service";
import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TSnackBarProps } from "@/types";
import { NotificationSnackBarComponent } from "@/app/share/components/notification-snack-bar/notification-snack-bar.component";
import { API_FETCHING_STATE } from "@/constants";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    userName: "",
    password: "",
  });

  redirectUrl: string = "";
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private routeService: RouteService,
    private authService: AuthService
  ) {
    this.routeService
      .getRedirectUrl()
      .subscribe(paramValue => (this.redirectUrl = paramValue as string));

    this.authService.getAuthState().subscribe(state => {
      switch (state) {
        case API_FETCHING_STATE.LOADING:
          this.isLoading = true;
          break;
        case API_FETCHING_STATE.SUCCESS:
          this.openSnackBar({ message: "login successful !" });
          this.isLoading = false;
          this.redirect();
          this.authService.updateAuthState(API_FETCHING_STATE.IDLE);
          break;
        case API_FETCHING_STATE.ERROR:
          this.isLoading = false;
          this.openSnackBar({
            message: "login failed, check you inputs then retry !",
          });
          this.authService.updateAuthState(API_FETCHING_STATE.IDLE);
          break;
        default:
          this.authService.updateAuthState(API_FETCHING_STATE.IDLE);
          break;
      }
    });
  }

  openSnackBar({ message }: TSnackBarProps) {
    this._snackBar.openFromComponent(NotificationSnackBarComponent, {
      data: {
        message: message,
      },
    });
  }

  redirect() {
    this.routeService.navigateWithUrlOnly({
      path: this.redirectUrl,
    });
  }

  getLogin() {
    this.authService.getLogin({
      userName: this.loginForm.value.userName as string,
      password: this.loginForm.value.password as string,
    });
  }
}
