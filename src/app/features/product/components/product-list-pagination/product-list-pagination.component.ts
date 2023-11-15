import { Component } from "@angular/core";
import { PAGINATION, PRODUCT_QUERY_PARAM_KEYS } from "@/app/share/constants";
import { ProductService } from "../../services/product.service";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/configs/routes";
import { TNumElementsPerPageOptions } from "@/app/share/types";
import { TProducts } from "../../types";
@Component({
  selector: "app-product-list-pagination",
  templateUrl: "./product-list-pagination.component.html",
  styleUrls: ["./product-list-pagination.component.css"],
})
export class ProductListPaginationComponent {
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

    this.routeService.getProductQueryParams().subscribe(paramValue => {
      const searchTermValue = paramValue[PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM];
      this.searchTerm = searchTermValue;

      const pageValue = paramValue[PRODUCT_QUERY_PARAM_KEYS.PAGE];
      this.currentPage = Number(pageValue);

      const offsetValue = paramValue[PRODUCT_QUERY_PARAM_KEYS.OFFSET];
      this.currentOffset = Number(offsetValue);
      this.updatePageMax();
    });
  }

  changePage(newPage: number) {
    if (newPage !== this.currentPage) {
      this.currentPage = newPage;
      this.routeService.navigateWithQueryParams({
        path: PATH.PRODUCTS,
        queryParams: { page: this.currentPage, offset: this.currentOffset },
      });
    }
  }

  nextPage() {
    if (this.currentPage < this.pageMax) {
      this.changePage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > this.pageMin) {
      this.changePage(this.currentPage - 1);
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
    this.changePage(this.pageMin);
    this.routeService.navigateWithQueryParams({
      path: PATH.PRODUCTS,
      queryParams: { page: this.currentPage, offset: this.currentOffset },
    });
  }

  updateOnProductsChange() {
    this.updatePageMax();
    this.changePage(this.pageMin);
  }

  resetAllFilter() {
    this.routeService.navigateWithUrlOnly({ path: PATH.PRODUCTS });
  }
}
