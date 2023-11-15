import { Component } from "@angular/core";
import { payments } from "@/app/share/constants/payments";

@Component({
  selector: "app-footer-sort-links",
  templateUrl: "./footer-sort-links.component.html",
  styleUrls: ["./footer-sort-links.component.css"],
})
export class FooterSortLinksComponent {
  payments = payments;
}
