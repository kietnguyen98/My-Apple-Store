import { Component, Input, OnInit } from "@angular/core";
import { TColor, TColors } from "@/types";
@Component({
  selector: "app-product-colors-select",
  templateUrl: "./product-colors-select.component.html",
  styleUrls: ["./product-colors-select.component.css"],
})
export class ProductColorsSelectComponent implements OnInit {
  @Input() options: TColors = [];
  currentOption: TColor | null = null;

  ngOnInit(): void {
    if (this.options.length > 0) {
      this.currentOption = this.options[0];
    }
  }

  handleChangeColor(newColor: TColor) {
    this.currentOption = newColor;
  }
}
