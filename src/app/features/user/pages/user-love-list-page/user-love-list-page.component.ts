import { Component } from "@angular/core";
import { LovedProductsService } from "../../services/loved-products.service";
import { TLovedProducts } from "../../types";
import {
  LOVED_PRODUCT_QUERY_PARAM_KEYS,
  PAGINATION,
} from "@/app/share/constants";
import { TChangePageAndOffsetProps } from "@/app/share/components/product-list-pagination/product-list-pagination.component";
import { PATH } from "@/app/share/configs";
import { RouteService } from "@/app/share/services/route.service";

@Component({
  selector: "app-user-love-list-page",
  templateUrl: "./user-love-list-page.component.html",
  styleUrls: ["./user-love-list-page.component.css"],
})
export class UserLoveListPageComponent {
  lovedProducts: TLovedProducts = [];
  lovedProductsToShow: TLovedProducts = [];
  totalElements: number = 0;
  currentPage: number = 1;
  currentOffset: number = PAGINATION.DEFAULT_OFFSET_OPTION.value;

  constructor(
    private routeService: RouteService,
    private lovedProductsService: LovedProductsService
  ) {
    this.lovedProductsService.getLovedProducts().subscribe(data => {
      this.lovedProducts = data;
      this.totalElements = data.length;
    });

    this.lovedProductsService.getLovedProductsByPagination().subscribe(data => {
      this.lovedProductsToShow = data;
    });

    this.routeService.getLovedProductsQueryParams().subscribe(paramValue => {
      const pageValue = paramValue[LOVED_PRODUCT_QUERY_PARAM_KEYS.PAGE];
      this.currentPage = Number(pageValue);

      const offsetValue = paramValue[LOVED_PRODUCT_QUERY_PARAM_KEYS.OFFSET];
      this.currentOffset = Number(offsetValue);
    });
  }

  // handle user change page
  handleChangePageAndOffset({ page, offset }: TChangePageAndOffsetProps) {
    this.routeService.navigateWithQueryParams({
      path: `${PATH.USER}/${PATH.LOVED_PRODUCTS}`,
      queryParams: { page: page, offset: offset },
    });
  }

  handleResetAllFilter() {
    this.routeService.navigateWithUrlOnly({
      path: `${PATH.USER}/${PATH.LOVED_PRODUCTS}`,
      reload: true,
    });
  }
}
