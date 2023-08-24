import { Component, OnInit } from "@angular/core";
import { categories } from "@/data/categories";
import { TCategories } from "@/types";
import { PRICES } from "@/constants";
import { CATEGORIES } from "@/constants";
import { MatRadioChange } from "@angular/material/radio";
import { ProductService } from "../../services/product.service";
@Component({
  selector: "app-product-filter-menu",
  templateUrl: "./product-filter-menu.component.html",
  styleUrls: ["./product-filter-menu.component.css"],
})
export class ProductFilterMenuComponent implements OnInit {
  categories: TCategories | undefined = [...categories];
  currentCategory: string = CATEGORIES.ALL_VALUE;
  startPrice: number = PRICES.DEFAULT_FILTER_START_PRICE;
  endPrice: number = PRICES.DEFAULT_FILTER_END_PRICE;
  sortPriceValue: number | null = null;
  readonly PRICE_SORT_OPTIONS = PRICES.SORT_OPTIONS;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.setQueryParams({
      category: this.currentCategory,
      startPrice: this.startPrice,
      endPrice: this.endPrice,
      sortPriceDirection: this.sortPriceValue || undefined,
    });
  }

  handleChangeCategory(newCategory: string) {
    // check if user unset all category filter value
    if (newCategory !== this.currentCategory) {
      this.currentCategory = newCategory;
      this.productService.setQueryParams({ category: this.currentCategory });
    }
  }

  handleStartPriceChange(newValue: number) {
    this.startPrice = newValue;
    this.productService.setQueryParams({
      startPrice: this.startPrice,
      endPrice: this.endPrice,
    });
  }

  handleEndPriceChange(newValue: number) {
    this.endPrice = newValue;
    this.productService.setQueryParams({
      startPrice: this.startPrice,
      endPrice: this.endPrice,
    });
  }

  formatPriceSliderLabel(value: number): string {
    return `${value}$`;
  }

  handleSortPriceValueChange(newValue: MatRadioChange) {
    this.sortPriceValue = newValue.value;
    this.productService.setQueryParams({
      sortPriceDirection: this.sortPriceValue || undefined,
    });
  }
}
