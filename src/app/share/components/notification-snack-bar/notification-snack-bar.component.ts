import { Component, inject, Inject } from "@angular/core";
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from "@angular/material/snack-bar";
import { TSnackBarProps } from "@/types";

@Component({
  selector: "app-notification-snack-bar",
  templateUrl: "./notification-snack-bar.component.html",
  styleUrls: ["./notification-snack-bar.component.css"],
})
export class NotificationSnackBarComponent {
  snackBarRef = inject(MatSnackBarRef);

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: TSnackBarProps) {}
}
