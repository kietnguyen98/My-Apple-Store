import { Component, OnInit } from "@angular/core";
import { TBreadcrumbLink } from "@/types";
import { routeHelper } from "@/utilities/helperFunctions";
import { RouteService } from "../../services/route.service";

const BREADCRUMB_ICONS: Array<{ name: string; iconName: string }> = [
  { name: "products", iconName: "devices_other" },
  { name: "iPhone", iconName: "phone_iphone" },
  { name: "iPad", iconName: "tablet_mac" },
  { name: "iWatch", iconName: "watch" },
];

@Component({
  selector: "app-breadcrumbs-bar",
  templateUrl: "./breadcrumbs-bar.component.html",
  styleUrls: ["./breadcrumbs-bar.component.css"],
})
export class BreadcrumbsBarComponent implements OnInit {
  links: Array<TBreadcrumbLink> = [];

  constructor(private routeService: RouteService) {}

  ngOnInit(): void {
    const linkNames = routeHelper
      .encodeUrl(this.routeService.router.url)
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
  }

  navigateTo(link: string) {
    this.routeService.navigateWithUrlOnly({ path: link });
  }
}
