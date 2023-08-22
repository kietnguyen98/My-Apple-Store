import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TBreadcrumbLink } from "@/types";

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
      if (i > 0) {
        let linkTo = "";
        for (let j = 0; j <= i; j++) {
          linkTo += `/${linkNames[j]}`;
        }
        link = {
          name: linkNames[i],
          to: linkTo,
        };
      } else {
        link = {
          name: linkNames[i],
          to: `/${linkNames[i]}`,
        };
      }

      this.links.push(link);
    }
  }
}
