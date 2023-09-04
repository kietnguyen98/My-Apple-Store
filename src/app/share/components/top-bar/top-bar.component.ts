import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { COMPONENT_DIMENSIONS } from "@/constants";
import { PATH } from "@/configs/routes";
@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent implements OnInit {
  constructor(private router: Router) {}

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

    const currentRoute = this.router.url.replaceAll("/", "");
    if (currentRoute === PATH.HOME) {
      const headerBarDummy = document.getElementById("header-bar-dummy");
      if (headerBarDummy && headerBar) {
        headerBarDummy.style.display = "none";
        headerBar.style.backgroundColor = "transparent";
      }
    }
  }

  navigateToHome() {
    this.router.navigate([PATH.HOME]);
  }
}
