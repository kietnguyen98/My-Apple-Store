import { Component, OnInit } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { AUTH_QUERY_PARAM_KEYS, COMPONENT_DIMENSIONS } from "@/constants";
import { PATH } from "@/configs/routes";
import { HeaderSearchInputComponent } from "./header-search-input/header-search-input.component";
import { RouteService } from "../../services/route.service";
import { AuthService } from "@/app/features/auth/services/auth.service";
import { TUser } from "@/app/features/auth/types";
import { encodeUrl } from "@/utilities/routeHelper";

@Component({
  providers: [HeaderSearchInputComponent],
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent implements OnInit {
  currentRoute: string | undefined;
  isAuth: boolean = true;
  user: TUser | undefined;
  private APP_PRIMARY_COLOR: string = "#191919";

  constructor(
    private routeService: RouteService,
    private authService: AuthService
  ) {
    // subscribes router event (as an observer) change to detect current route path
    this.routeService.router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        const headerBar = document.getElementById("header-bar");
        const headerBarDummy = document.getElementById("header-bar-dummy");
        if (!headerBar || !headerBarDummy) return;
        const currentRoute = route.url.replaceAll("/", "");
        this.currentRoute = currentRoute;
        if (currentRoute === PATH.HOME) {
          headerBar.classList.add("background-transition");
          headerBarDummy.style.display = "none";
          headerBar.style.backgroundColor = "transparent";
        } else {
          headerBar.classList.remove("background-transition");
          headerBarDummy.style.display = "block";
          headerBar.style.backgroundColor = this.APP_PRIMARY_COLOR;
        }
      }
    });

    this.authService.getIsAuth().subscribe(value => (this.isAuth = value));
    this.authService.getUser().subscribe(value => (this.user = value));
  }

  ngOnInit(): void {
    const headerBar = document.getElementById("header-bar");
    const changeHeaderState = () => {
      if (headerBar) {
        if (window.scrollY >= COMPONENT_DIMENSIONS.APP_BREADCRUMBS_HEIGHT) {
          headerBar.classList.add("top-bar-box-shadow");
        } else {
          headerBar.classList.remove("top-bar-box-shadow");
        }

        if (this.currentRoute === PATH.HOME) {
          if (window.scrollY > 0) {
            headerBar.style.backgroundColor = this.APP_PRIMARY_COLOR;
          } else {
            headerBar.style.backgroundColor = "transparent";
          }
        }
      }
    };

    window.addEventListener("scroll", changeHeaderState);
  }

  navigateToHome() {
    this.routeService.navigateWithUrlOnly({ path: PATH.HOME });
  }

  navigateToLogin() {
    const redirectUrl = encodeUrl(this.routeService.router.url);
    this.routeService.navigateWithQueryParams({
      path: PATH.LOGIN,
      queryParams: { redirectUrl: redirectUrl },
      replaceAll: true,
    });
  }

  getLogout() {
    this.authService.getLogout();
  }
}
