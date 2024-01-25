import { Component } from "@angular/core";
import { PAYMENT_METHODS } from "@/app/share/constants/payments";

@Component({
  selector: "app-footer-sort-links",
  templateUrl: "./footer-sort-links.component.html",
  styleUrls: ["./footer-sort-links.component.css"],
})
export class FooterSortLinksComponent {
  PAYMENT_METHODS = PAYMENT_METHODS;
}
