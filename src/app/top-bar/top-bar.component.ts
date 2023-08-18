import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { COMPONENT_DIMENSIONS } from "@/constants";
@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const matToolbarElement = document.getElementById("mat-toolbar");
    function changeHeaderState() {
      if (matToolbarElement) {
        if (window.scrollY >= COMPONENT_DIMENSIONS.APP_BREADCRUMBS_HEIGHT) {
          matToolbarElement.classList.add("top-bar-box-shadow");
        } else {
          matToolbarElement.classList.remove("top-bar-box-shadow");
        }
      }
    }

    window.addEventListener("scroll", () => changeHeaderState());
  }

  navigateToHome() {
    this.router.navigate(["/"]);
  }

  navigateToCart() {
    this.router.navigate(["/", "cart"]);
  }
}
