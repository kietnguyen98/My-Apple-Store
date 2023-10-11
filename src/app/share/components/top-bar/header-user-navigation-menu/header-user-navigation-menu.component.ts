import { AuthService } from "@/app/features/auth/services/auth.service";
import { TUser } from "@/app/features/auth/types";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/configs/routes";
import { encodeUrl } from "@/utilities/routeHelper";
import { Component } from "@angular/core";
import { USER_NAVIGATE_OPTIONS } from "@/constants";

@Component({
  selector: "app-header-user-navigation-menu",
  templateUrl: "./header-user-navigation-menu.component.html",
  styleUrls: ["./header-user-navigation-menu.component.css"],
})
export class HeaderUserNavigationMenuComponent {
  isAuth: boolean = true;
  user: TUser | undefined;
  userNavigateOptions = USER_NAVIGATE_OPTIONS;

  constructor(
    private routeService: RouteService,
    private authService: AuthService
  ) {
    this.authService.getIsAuth().subscribe(value => (this.isAuth = value));
    this.authService.getUser().subscribe(value => (this.user = value));
  }

  navigateToLogin() {
    const redirectUrl = encodeUrl(this.routeService.router.url);
    this.routeService.navigateWithQueryParams({
      path: PATH.LOGIN,
      queryParams: { redirectUrl: redirectUrl },
      replaceAll: true,
    });
  }

  logout() {
    this.authService.getLogout();
  }

  navigateToUserPage(path: string) {
    this.routeService.navigateWithUrlOnly({ path: path, reload: false });
  }
}
