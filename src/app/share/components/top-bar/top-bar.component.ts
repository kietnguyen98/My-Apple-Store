import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";

import { COMPONENT_DIMENSIONS } from "@/constants";
import { PATH } from "@/configs/routes";
@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent implements OnInit {
  constructor(private router: Router) {
    const headerBar = document.getElementById("header-bar");
    const headerBarDummy = document.getElementById("header-bar-dummy");
    // subscribes router event (as an observer) change to detect current route path
    router.events.subscribe(route => {
      if (route instanceof NavigationStart) {
        console.log(route.url);
        if (!headerBar || !headerBarDummy) return;
        const currentRoute = route.url.replaceAll("/", "");
        if (currentRoute === PATH.HOME) {
          headerBarDummy.style.display = "none";
          headerBar.style.backgroundColor = "transparent";
        } else {
          headerBarDummy.style.display = "block";
          headerBar.style.backgroundColor = "#191919";
        }
      }
    });
  }

  ngOnInit(): void {
    const headerBar = document.getElementById("header-bar");
    function changeHeaderState() {
      if (headerBar) {
        if (window.scrollY >= COMPONENT_DIMENSIONS.APP_BREADCRUMBS_HEIGHT) {
          headerBar.classList.add("top-bar-box-shadow");
        } else {
          headerBar.classList.remove("top-bar-box-shadow");
        }
      }
    }

    window.addEventListener("scroll", () => changeHeaderState());
  }

  navigateToHome() {
    this.router.navigate([PATH.HOME]);
  }
}
