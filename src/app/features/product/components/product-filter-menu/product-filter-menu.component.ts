import { Component, Output, EventEmitter } from "@angular/core";
import { categories } from "@/data/categories";
import { TCategories } from "@/types";
import { PRICES } from "@/constants";
import { CATEGORIES } from "@/constants";
import { MatRadioChange } from "@angular/material/radio";

@Component({
  selector: "app-product-filter-menu",
  templateUrl: "./product-filter-menu.component.html",
  styleUrls: ["./product-filter-menu.component.css"],
})
export class ProductFilterMenuComponent {
  categories: TCategories | undefined = [...categories];
  currentCategory: string = CATEGORIES.ALL_VALUE;
  startPrice: number = PRICES.DEFAULT_FILTER_START_PRICE;
  endPrice: number = PRICES.DEFAULT_FILTER_END_PRICE;
  sortPriceValue: number | null = null;
  readonly PRICE_SORT_OPTIONS = PRICES.SORT_OPTIONS;

  @Output() categoryChange = new EventEmitter<string>();
  @Output() startPriceChange = new EventEmitter<number>();
  @Output() endPriceChange = new EventEmitter<number>();
  @Output() sortPriceChange = new EventEmitter<number>();

  handleChangeCategory(newCategory: string) {
    // check if user unset all category filter value
    if (newCategory !== this.currentCategory) {
      this.categoryChange.emit(newCategory);
      this.currentCategory = newCategory;
    }
  }

  handleStartPriceChange(newValue: number) {
    this.startPrice = newValue;
    this.startPriceChange.emit(newValue);
  }

  handleEndPriceChange(newValue: number) {
    this.endPrice = newValue;
    this.endPriceChange.emit(newValue);
  }

  formatPriceSliderLabel(value: number): string {
    return `${value}$`;
  }

  handleSortPriceValueChange(newValue: MatRadioChange) {
    this.sortPriceValue = newValue.value;
    this.sortPriceChange.emit(newValue.value);
  }
}
