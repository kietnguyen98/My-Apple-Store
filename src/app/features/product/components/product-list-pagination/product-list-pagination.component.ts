import { Component, OnInit } from "@angular/core";
import { PAGINATION, PRODUCT_QUERY_PARAM_KEYS } from "@/constants";
import { TNumElementsPerPageOptions, TProducts } from "@/types";
import { ProductService } from "../../services/product.service";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/configs/routes";
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
    private routeService: RouteService
  ) {
    this.productService.getListProducts().subscribe((data: TProducts) => {
      this.totalElements = data.length;
      this.updatePageMax();
    });

    this.routeService
      .getParamSearchTerm()
      .subscribe(paramValue => (this.searchTerm = paramValue));

    this.routeService
      .getParamPage()
      .subscribe(paramValue => (this.currentPage = Number(paramValue)));

    this.routeService
      .getParamOffset()
      .subscribe(paramValue => (this.currentOffset = Number(paramValue)));
  }

  ngOnInit(): void {
    this.changeOffset(PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value);
  }

  selectPage(newPage: number) {
    if (newPage !== this.currentPage) {
      this.currentPage = newPage;
      this.routeService.navigateWithParams({
        path: PATH.LIST_PRODUCTS,
        queryParams: [
          { key: PRODUCT_QUERY_PARAM_KEYS.PAGE, value: this.currentPage },
          { key: PRODUCT_QUERY_PARAM_KEYS.OFFSET, value: this.currentOffset },
        ],
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
    this.routeService.navigateWithParams({
      path: PATH.LIST_PRODUCTS,
      queryParams: [
        { key: PRODUCT_QUERY_PARAM_KEYS.PAGE, value: this.currentPage },
        { key: PRODUCT_QUERY_PARAM_KEYS.OFFSET, value: this.currentOffset },
      ],
    });
  }

  updateOnProductsChange() {
    this.updatePageMax();
    this.selectPage(this.pageMin);
  }

  resetAllFilter() {
    this.routeService.navigateWithUrlOnly({ path: PATH.LIST_PRODUCTS });
  }
}
