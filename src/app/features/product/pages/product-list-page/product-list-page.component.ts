import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  COMPONENT_DIMENSIONS,
  PAGINATION,
  PRODUCT_QUERY_PARAM_KEYS,
} from "@/app/share/constants";
import { ProductService } from "../../services/product.service";
import { TProducts } from "../../types";
import { RouteService } from "@/app/share/services/route.service";
import { PATH } from "@/app/share/configs";
import { TChangePageAndOffsetProps } from "@/app/share/components/product-list-pagination/product-list-pagination.component";
@Component({
  selector: "app-product-list-page",
  templateUrl: "./product-list-page.component.html",
  styleUrls: ["./product-list-page.component.css"],
})
export class ProductListPageComponent implements OnInit, OnDestroy {
  // current list of products
  searchTerm: string = "";
  totalElements: number = 0;
  currentPage: number = 1;
  currentOffset: number = PAGINATION.DEFAULT_OFFSET_OPTION.value;
  productsToShow: TProducts = [];
  getStickyDrawer: (() => void) | undefined;

  constructor(
    private productService: ProductService,
    private routeService: RouteService
  ) {
    this.productService
      .getListProductsByPagination()
      .subscribe((data: TProducts) => {
        this.productsToShow = data;
      });

    this.productService.getListProducts().subscribe((data: TProducts) => {
      this.totalElements = data.length;
    });

    this.routeService.getProductQueryParams().subscribe(paramValue => {
      const searchTermValue = paramValue[PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM];
      this.searchTerm = searchTermValue;

      const pageValue = paramValue[PRODUCT_QUERY_PARAM_KEYS.PAGE];
      this.currentPage = Number(pageValue);

      const offsetValue = paramValue[PRODUCT_QUERY_PARAM_KEYS.OFFSET];
      this.currentOffset = Number(offsetValue);
    });
  }

  ngOnInit(): void {
    const drawerElement = document.getElementById("side-drawer");
    this.getStickyDrawer = () => {
      if (drawerElement) {
        if (window.scrollY > COMPONENT_DIMENSIONS.APP_BREADCRUMBS_HEIGHT) {
          return drawerElement.classList.add("side-nav-sticky");
        } else {
          return drawerElement.classList.remove("side-nav-sticky");
        }
      }
    };

    window.addEventListener("scroll", this.getStickyDrawer);
  }

  ngOnDestroy(): void {
    window.removeEventListener("scroll", this.getStickyDrawer as () => void);
  }

  // handle user change page
  handleChangePageAndOffset({ page, offset }: TChangePageAndOffsetProps) {
    this.routeService.navigateWithQueryParams({
      path: PATH.PRODUCTS,
      queryParams: { page: page, offset: offset },
    });
  }

  handleResetAllFilter() {
    this.routeService.navigateWithUrlOnly({
      path: PATH.PRODUCTS,
      reload: true,
    });
  }
}
