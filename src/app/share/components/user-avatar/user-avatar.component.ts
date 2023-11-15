import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user-avatar",
  templateUrl: "./user-avatar.component.html",
  styleUrls: ["./user-avatar.component.css"],
})
export class UserAvatarComponent {
  @Input() avatarUrl: string = "";
  @Input() size: number = 0;
}
