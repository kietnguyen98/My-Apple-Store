import { Component, Input, OnInit } from "@angular/core";
import { IColor } from "@/data/colors";

@Component({
  selector: "app-product-colors-select",
  templateUrl: "./product-colors-select.component.html",
  styleUrls: ["./product-colors-select.component.css"],
})
export class ProductColorsSelectComponent implements OnInit {
  @Input() options: Array<IColor> = [];
  currentOption: IColor | null = null;

  ngOnInit(): void {
    if (this.options.length > 0) {
      this.currentOption = this.options[0];
    }
  }

  handleChangeColor(newColor: IColor) {
    this.currentOption = newColor;
  }
}
