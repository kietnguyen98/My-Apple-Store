import { Component, OnInit } from "@angular/core";
import { COMPONENT_DIMENSIONS } from "@/app/share/constants";
import { windowScrollHelper } from "@/utilities";

@Component({
  selector: "app-scroll-top-button",
  templateUrl: "./scroll-top-button.component.html",
  styleUrls: ["./scroll-top-button.component.css"],
})
export class ScrollTopButtonComponent implements OnInit {
  ngOnInit(): void {
    const scrollToTopButton = document.getElementById("scroll-to-top-button");
    window.addEventListener("scroll", () => {
      if (scrollToTopButton) {
        if (window.scrollY > COMPONENT_DIMENSIONS.APP_BREADCRUMBS_HEIGHT) {
          scrollToTopButton.style.display = "block";
          scrollToTopButton.style.opacity = "1";
        } else {
          scrollToTopButton.style.opacity = "0";
          scrollToTopButton.style.display = "none";
        }
      }
    });
  }

  scrollToTop = windowScrollHelper.scrollToTopSmooth;
}
