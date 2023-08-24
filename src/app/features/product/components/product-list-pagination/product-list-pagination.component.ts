import { Component, OnInit } from "@angular/core";
import { PAGINATION } from "@/constants";
import { TNumElementsPerPageOptions, TProducts } from "@/types";
import { ProductService } from "../../services/product.service";
@Component({
  selector: "app-product-list-pagination",
  templateUrl: "./product-list-pagination.component.html",
  styleUrls: ["./product-list-pagination.component.css"],
})
export class ProductListPaginationComponent implements OnInit {
  totalElements: number = 0;
  currentPage: number = 1;
  elementPerPage: number = PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value;
  pageMin: number = 1;
  pageMax: number = 1;
  elementsPerPageOptions: TNumElementsPerPageOptions =
    PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS;

  constructor(private productService: ProductService) {
    this.productService
      .getListProducts()
      .subscribe((data: TProducts) => (this.totalElements = data.length));
  }

  ngOnInit(): void {
    this.changeElementsPerPage(
      PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value
    );
  }

  selectPage(newPage: number) {
    if (newPage !== this.currentPage) {
      this.currentPage = newPage;
      this.productService.setQueryParams({
        page: this.currentPage,
        offset: this.elementPerPage,
      });
    }
  }

  nextPage() {
    if (this.currentPage < this.pageMax) {
      this.selectPage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > this.pageMin) {
      this.selectPage(this.currentPage - 1);
    }
  }

  changeElementsPerPage(event: any | number) {
    const newValue: number =
      typeof event === "number" ? event : event.target.value;
    this.elementPerPage = newValue;
    this.pageMax = Math.ceil(this.totalElements / this.elementPerPage);
    this.selectPage(this.pageMin);
    this.productService.setQueryParams({
      page: this.currentPage,
      offset: this.elementPerPage,
    });
  }

  updateOnProductsChange() {
    this.pageMax = Math.ceil(this.totalElements / this.elementPerPage);
    this.selectPage(this.pageMin);
  }
}
