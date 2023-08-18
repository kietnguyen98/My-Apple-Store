import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { IMemoryCapacity } from "@/data/memory";

@Component({
  selector: "app-product-memories-select",
  templateUrl: "./product-memories-select.component.html",
  styleUrls: ["./product-memories-select.component.css"],
})
export class ProductMemoriesSelectComponent implements OnInit {
  @Input() options: Array<IMemoryCapacity> = [];
  @Output() changeMemoryCapacity = new EventEmitter<IMemoryCapacity>();

  currentOption: IMemoryCapacity | null = null;

  ngOnInit(): void {
    if (this.options.length > 0) {
      this.currentOption = this.options[0];
    }
  }

  handleChangeMemoryCapacity(newValue: IMemoryCapacity) {
    if (newValue !== this.currentOption) {
      this.currentOption = newValue;
      this.changeMemoryCapacity.emit(this.currentOption);
    }
  }
}
