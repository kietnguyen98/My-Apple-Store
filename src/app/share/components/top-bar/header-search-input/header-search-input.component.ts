import { Component, OnInit } from "@angular/core";
import { RouteService } from "@/app/share/services/route.service";

@Component({
  selector: "app-header-search-input",
  templateUrl: "./header-search-input.component.html",
  styleUrls: ["./header-search-input.component.css"],
})
export class HeaderSearchInputComponent implements OnInit {
  searchTerm: string = "";

  constructor(private routeService: RouteService) {
    this.routeService.getParamSearchTerm().subscribe(searchTerm => {
      if (searchTerm) {
        this.searchTerm = searchTerm;
        this.focusSearchBox();
      } else {
        this.searchTerm = "";
        this.unFocusSearchBox();
      }
    });
  }

  changeSearchTerm(event?: Event) {
    this.searchTerm = (event?.target as HTMLInputElement).value;
  }

  getSearchProducts() {
    this.routeService.getSearchProducts(this.searchTerm);
  }

  focusSearchBox() {
    const containerElement = document.getElementById(
      "header-search-container"
    ) as HTMLElement;

    if (containerElement) containerElement.classList.add("toggle-light");
  }

  unFocusSearchBox() {
    const containerElement = document.getElementById(
      "header-search-container"
    ) as HTMLElement;

    if (containerElement) containerElement.classList.remove("toggle-light");
  }

  ngOnInit(): void {
    const containerElement = document.getElementById(
      "header-search-container"
    ) as HTMLElement;

    const inputElement = containerElement.querySelector(
      "#header-search-input"
    ) as HTMLElement;

    inputElement.addEventListener("focusin", () => {
      containerElement.classList.add("toggle-light");
    });

    inputElement.addEventListener("focusout", () => {
      if (!this.searchTerm) {
        containerElement.classList.remove("toggle-light");
      }
    });

    inputElement.addEventListener("keyup", e => {
      if ((e.key === "Enter" || e.code === "13") && this.searchTerm) {
        this.getSearchProducts();
      }
    });
  }
}
