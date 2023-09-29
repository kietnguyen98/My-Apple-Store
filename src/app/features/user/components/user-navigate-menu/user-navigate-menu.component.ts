import { Component } from "@angular/core";

type TUserMenuNavigation = Array<{ name: string; navigateUrl: string }>;

@Component({
  selector: "app-user-navigate-menu",
  templateUrl: "./user-navigate-menu.component.html",
  styleUrls: ["./user-navigate-menu.component.css"],
})
export class UserNavigateMenuComponent {
  userMenu: TUserMenuNavigation = [
    {
      name: "My Profile",
      navigateUrl: "",
    },
    {
      name: "My Purchases",
      navigateUrl: "",
    },
    {
      name: "My Love list",
      navigateUrl: "",
    },
  ];
}
