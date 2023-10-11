import { RouteService } from "@/app/share/services/route.service";
import { Component } from "@angular/core";
import { USER_NAVIGATE_OPTIONS } from "@/constants";
import { routeHelper } from "@/utilities";
import { AuthService } from "@/app/features/auth/services/auth.service";
import { TUser } from "@/app/features/auth/types";
@Component({
  selector: "app-user-navigate-menu",
  templateUrl: "./user-navigate-menu.component.html",
  styleUrls: ["./user-navigate-menu.component.css"],
})
export class UserNavigateMenuComponent {
  userNavigateOptions = USER_NAVIGATE_OPTIONS;
  user: TUser | undefined;
  currentPath: string = "";

  constructor(
    private routeService: RouteService,
    private authService: AuthService
  ) {
    this.routeService.getCurrentPath().subscribe(path => {
      this.currentPath = routeHelper.getCleanSpecificRoutePath(path, false);
    });

    this.authService
      .getUser()
      .subscribe(userInfo => (this.user = userInfo as TUser));
  }

  navigateToUserPage(path: string) {
    this.routeService.navigateWithUrlOnly({ path: path, reload: false });
  }
}
