import { Component, OnInit } from "@angular/core";
import { PAGINATION, QUERY_PARAM_KEYS } from "@/constants";
import { TNumElementsPerPageOptions, TProducts } from "@/types";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-product-list-pagination",
  templateUrl: "./product-list-pagination.component.html",
  styleUrls: ["./product-list-pagination.component.css"],
})
export class ProductListPaginationComponent implements OnInit {
  searchTerm: string = "";
  totalElements: number = 0;
  currentPage: number = 1;
  currentOffset: number = PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value;
  pageMin: number = 1;
  pageMax: number = 1;
  elementsPerPageOptions: TNumElementsPerPageOptions =
    PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.productService.getListProducts().subscribe((data: TProducts) => {
      this.totalElements = data.length;
      this.updatePageMax();
    });

    this.activatedRoute.queryParams.subscribe(
      queryParams => (this.searchTerm = queryParams[QUERY_PARAM_KEYS.SEARCH])
    );
  }

  ngOnInit(): void {
    this.changeOffset(PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value);
  }

  selectPage(newPage: number) {
    if (newPage !== this.currentPage) {
      this.currentPage = newPage;
      this.productService.setQueryParams({
        page: this.currentPage,
        offset: this.currentOffset,
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

  updatePageMax() {
    this.pageMax = Math.ceil(this.totalElements / this.currentOffset);
  }

  changeOffset(event: any | number) {
    const newValue: number =
      typeof event === "number" ? event : event.target.value;
    this.currentOffset = newValue;
    this.updatePageMax();
    this.selectPage(this.pageMin);
    this.productService.setQueryParams({
      page: this.currentPage,
      offset: this.currentOffset,
    });
  }

  updateOnProductsChange() {
    this.updatePageMax();
    this.selectPage(this.pageMin);
  }
}
