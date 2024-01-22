import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

type DialogData = {
  title?: string;
  content?: string;
  handleConfirm: () => void;
};

@Component({
  selector: "app-alert-dialog",
  templateUrl: "./alert-dialog.component.html",
  styleUrls: ["./alert-dialog.component.css"],
})
export class AlertDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
