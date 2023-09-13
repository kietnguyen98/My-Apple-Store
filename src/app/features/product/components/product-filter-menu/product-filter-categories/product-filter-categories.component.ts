import { Component, OnInit } from "@angular/core";
import { categories } from "@/data/categories";
import { ProductService } from "../../../services/product.service";
import { TCategories } from "@/types";
import { CATEGORIES } from "@/constants";

@Component({
  selector: "app-product-filter-categories",
  templateUrl: "./product-filter-categories.component.html",
  styleUrls: ["./product-filter-categories.component.css"],
})
export class ProductFilterCategoriesComponent implements OnInit {
  categories: TCategories | undefined = [...categories];
  currentCategory: string = CATEGORIES.ALL_VALUE;

  constructor(private productService: ProductService) {}

  handleChangeCategory(newCategory: string) {
    // check if user unset all category filter value
    if (newCategory !== this.currentCategory) {
      this.currentCategory = newCategory;
      this.productService.setQueryParams({ category: this.currentCategory });
    }
  }

  ngOnInit(): void {
    this.productService.setQueryParams({
      category: this.currentCategory,
    });
  }
}
