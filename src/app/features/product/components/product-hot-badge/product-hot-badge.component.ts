import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product-hot-badge",
  templateUrl: "./product-hot-badge.component.html",
  styleUrls: ["./product-hot-badge.component.css"],
})
export class ProductHotBadgeComponent {
  @Input() shouldExposed: boolean = false;
}
