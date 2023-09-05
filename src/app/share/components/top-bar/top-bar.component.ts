import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

import { COMPONENT_DIMENSIONS } from "@/constants";
import { PATH } from "@/configs/routes";
@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent implements OnInit {
  currentRoute: string | undefined;

  constructor(private router: Router) {
    // subscribes router event (as an observer) change to detect current route path
    router.events.subscribe(route => {
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
          headerBar.style.backgroundColor = "#191919";
        }
      }
    });
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
            headerBar.style.backgroundColor = "#191919";
          } else {
            headerBar.style.backgroundColor = "transparent";
          }
        }
      }
    };

    window.addEventListener("scroll", changeHeaderState);
  }

  navigateToHome() {
    this.router.navigate([PATH.HOME]);
  }
}
