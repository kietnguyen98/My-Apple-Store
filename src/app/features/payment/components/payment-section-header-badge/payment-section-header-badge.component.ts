import { Component, Input } from "@angular/core";

@Component({
  selector: "app-payment-section-header-badge",
  templateUrl: "./payment-section-header-badge.component.html",
  styleUrls: ["./payment-section-header-badge.component.css"],
})
export class PaymentSectionHeaderBadgeComponent {
  @Input() title: string = "";
  @Input() iconName: string = "";
}
