import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

type DialogData = {
  title?: string;
  content?: string;
  handleConfirm: () => void;
};

@Component({
  selector: "app-cart-alert-dialog",
  templateUrl: "./cart-alert-dialog.component.html",
  styleUrls: ["./cart-alert-dialog.component.css"],
})
export class CartAlertDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
