import { Component, OnInit } from "@angular/core";
import { IProduct, products } from "@/data/products";
import { CATEGORIES, PRICES } from "@/constants";
import { PAGINATION } from "@/constants";
import { COMPONENT_DIMENSIONS } from "@/constants";
import { scrollToTopImmediately } from "@/utilities/functions";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  // filter values
  currentCategoryValue: string = CATEGORIES.ALL_VALUE;
  currentStartPriceValue: number = PRICES.DEFAULT_FILTER_START_PRICE;
  currentEndPriceValue: number = PRICES.DEFAULT_FILTER_END_PRICE;
  currentSortPriceValue: number | null = null;

  // pagination values
  currentPage: number = 1;
  productsPerPage: number = PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[0].value;

  // current list of products
  products: Array<IProduct> = [...products].filter(
    product =>
      (this.currentCategoryValue !== CATEGORIES.ALL_VALUE
        ? product.category.name === this.currentCategoryValue
        : product.category.name) &&
      product.price >= this.currentStartPriceValue &&
      product.price <= this.currentEndPriceValue
  );
  productsToShow: Array<IProduct> = [...this.products].slice(
    (this.currentPage - 1) * this.productsPerPage,
    this.currentPage * this.productsPerPage
  );

  ngOnInit(): void {
    const drawerElement = document.getElementById("side-drawer");

    function onScroll() {
      if (drawerElement) {
        if (window.scrollY > COMPONENT_DIMENSIONS.APP_BREADCRUMBS_HEIGHT) {
          return drawerElement.classList.add("side-nav-sticky");
        } else {
          return drawerElement.classList.remove("side-nav-sticky");
        }
      }
    }

    window.addEventListener("scroll", () => onScroll());
  }

  share() {
    window.alert("The product has been shared!");
  }

  onCategoryChange(newCategory: string) {
    this.currentCategoryValue = newCategory;
    this.updateProducts();
  }

  onStartPriceChange(newValue: number) {
    this.currentStartPriceValue = newValue;
    this.updateProducts();
  }

  onEndPriceChange(newValue: number) {
    this.currentEndPriceValue = newValue;
    this.updateProducts();
  }

  onSortPriceChange(newValue: number) {
    this.currentSortPriceValue = newValue;
    this.updateProducts();
  }

  onChangeCurrentPage(newPage: number) {
    this.currentPage = newPage;
    this.updateProducts();
  }

  onChangeNumProductsPerPage(newValue: number) {
    this.productsPerPage = newValue;
    this.updateProducts();
  }

  updateProducts() {
    // should scroll to the top of the page first
    scrollToTopImmediately();

    let tempProducts = [...products];

    // filter values
    tempProducts = tempProducts.filter(
      product =>
        (this.currentCategoryValue !== CATEGORIES.ALL_VALUE
          ? product.category.name === this.currentCategoryValue
          : product.category.name) &&
        product.price >= this.currentStartPriceValue &&
        product.price <= this.currentEndPriceValue
    );

    // sort values
    if (this.currentSortPriceValue) {
      tempProducts = tempProducts.sort((current, next) =>
        this.currentSortPriceValue === -1
          ? current.price - next.price
          : next.price - current.price
      );
    }

    this.products = tempProducts;

    // paginating on current products after filter and sort
    tempProducts = tempProducts.slice(
      (this.currentPage - 1) * this.productsPerPage,
      this.currentPage * this.productsPerPage
    );

    this.productsToShow = tempProducts;
  }
}
