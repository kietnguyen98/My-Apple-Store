import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user-page-title-badge",
  templateUrl: "./user-page-title-badge.component.html",
  styleUrls: ["./user-page-title-badge.component.css"],
})
export class UserPageTitleBadgeComponent {
  @Input() title: string = "";
  @Input() subTitle: string = "";
  @Input() iconName: string = "";
}
