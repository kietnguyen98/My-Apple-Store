import { RouteService } from "@/app/share/services/route.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  redirectUrl: string = "";
  constructor(private routeService: RouteService) {
    this.routeService
      .getRedirectUrl()
      .subscribe(paramValue => (this.redirectUrl = paramValue as string));
  }

  redirect() {
    this.routeService.navigateWithUrlOnly({
      path: this.redirectUrl,
    });
  }
}
