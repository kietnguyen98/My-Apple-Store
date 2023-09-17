import { RouteService } from "@/app/share/services/route.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent {
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
