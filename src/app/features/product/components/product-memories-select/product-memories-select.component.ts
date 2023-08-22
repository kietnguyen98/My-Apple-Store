import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { TMemoryCapacity, TMemoryCapacities } from "@/types";

@Component({
  selector: "app-product-memories-select",
  templateUrl: "./product-memories-select.component.html",
  styleUrls: ["./product-memories-select.component.css"],
})
export class ProductMemoriesSelectComponent implements OnInit {
  @Input() options: TMemoryCapacities = [];
  @Output() changeMemoryCapacity = new EventEmitter<TMemoryCapacity>();

  currentOption: TMemoryCapacity | null = null;

  ngOnInit(): void {
    if (this.options.length > 0) {
      this.currentOption = this.options[0];
    }
  }

  handleChangeMemoryCapacity(newValue: TMemoryCapacity) {
    if (newValue !== this.currentOption) {
      this.currentOption = newValue;
      this.changeMemoryCapacity.emit(this.currentOption);
    }
  }
}
