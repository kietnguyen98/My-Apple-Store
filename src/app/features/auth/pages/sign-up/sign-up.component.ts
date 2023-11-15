import { RouteService } from "@/app/share/services/route.service";
import { AUTH_QUERY_PARAM_KEYS } from "@/app/share/constants";
import { Component } from "@angular/core";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent {
  redirectUrl: string = "";
  constructor(private routeService: RouteService) {
    this.routeService.getLoginQueryParams().subscribe(paramValue => {
      const redirectUrl = paramValue[AUTH_QUERY_PARAM_KEYS.REDIRECT_URL];
      this.redirectUrl = redirectUrl;
    });
  }

  redirect() {
    this.routeService.navigateWithUrlOnly({
      path: this.redirectUrl,
    });
  }
}
