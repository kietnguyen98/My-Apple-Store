import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TBreadcrumbLink } from "@/types";
import { MatIcon } from "@angular/material/icon";

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    const linkNames = this.router.url
      .replaceAll("%20", " ")
      .split("/")
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
      };

      this.links.push(link);
    }
  }
}
