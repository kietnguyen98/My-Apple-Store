import { Component, Input, Output, EventEmitter } from "@angular/core";
import { TProduct } from "@/types";
@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"],
})
export class ProductAlertsComponent {
  @Input() product: TProduct | undefined;
  @Output() notify = new EventEmitter();
}
