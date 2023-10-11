import { Component } from "@angular/core";
import { routeHelper } from "@/utilities";
import { RouteService } from "../../services/route.service";
import { TBreadcrumbLink } from "../../types";

const BREADCRUMB_ICONS: Array<{ name: string; iconName: string }> = [
  { name: "products", iconName: "devices_other" },
  { name: "iPhone", iconName: "phone_iphone" },
  { name: "iPad", iconName: "tablet_mac" },
  { name: "iWatch", iconName: "watch" },
  { name: "user", iconName: "person" },
  { name: "profile", iconName: "account_box" },
  { name: "purchases", iconName: "list" },
  { name: "love list", iconName: "favorite" },
];

@Component({
  selector: "app-breadcrumbs-bar",
  templateUrl: "./breadcrumbs-bar.component.html",
  styleUrls: ["./breadcrumbs-bar.component.css"],
})
export class BreadcrumbsBarComponent {
  links: Array<TBreadcrumbLink> = [];

  constructor(private routeService: RouteService) {
    this.routeService.getCurrentPath().subscribe(path => {
      this.links = [];
      const linkNames = routeHelper
        .encodeUrl(path)
        .split("?")[0] // remove query params path
        .split("/") // split to segments
        .filter(link => link.length > 0);

      for (let i = 0; i < linkNames.length; i++) {
        let link: TBreadcrumbLink;
        let linkTo = "";
        for (let j = 0; j <= i; j++) {
          linkTo += `/${linkNames[j]}`;
        }
        let iconName = "";
        BREADCRUMB_ICONS.forEach(e => {
          if (linkNames[i].includes(e.name)) iconName = e.iconName;
        });

        link = {
          name: linkNames[i],
          to: linkTo,
          iconName: iconName,
          isActive: i < linkNames.length - 1 ? true : false,
        };

        this.links.push(link);
      }
    });
  }

  navigateTo(link: string) {
    this.routeService.navigateWithUrlOnly({ path: link });
  }
}
