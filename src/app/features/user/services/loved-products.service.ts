import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { TLovedProducts } from "../types";
import { lovedProductsMockData } from "../data";
import { AuthService } from "../../auth/services/auth.service";
import { RouteService } from "@/app/share/services/route.service";
import { TLovedProductQueryParams } from "@/app/share/types";
import {
  CATEGORY_VALUES,
  LOVED_PRODUCT_QUERY_PARAM_KEYS,
} from "@/app/share/constants";

@Injectable({
  providedIn: "root",
})
export class LovedProductsService {
  lovedProducts: TLovedProducts = [];
  lovedProductsByPagination: TLovedProducts = [];
  lovedProductsSubject = new BehaviorSubject<TLovedProducts>(
    this.lovedProducts
  );
  lovedProductsByPaginationSubject = new BehaviorSubject<TLovedProducts>(
    this.lovedProducts
  );
  queryParams: TLovedProductQueryParams = {};

  // get list loved product by user id
  constructor(
    private authService: AuthService,
    private routeService: RouteService
  ) {
    this.authService.getUser().subscribe(user => {
      if (user) {
        const userLovedProducts = lovedProductsMockData.filter(
          lovedProduct => lovedProduct.user.id === user.id
        );

        this.lovedProducts = userLovedProducts;
      }
    });

    // detect change on query params
    this.routeService.getLovedProductsQueryParams().subscribe(queryParams => {
      this.queryParams = queryParams as TLovedProductQueryParams;
      this.filterLovedProducts();
    });
  }

  getLovedProducts(): Observable<TLovedProducts> {
    return this.lovedProductsSubject.asObservable();
  }

  filterLovedProducts() {
    let tempLovedProducts = [...this.lovedProducts];
    const category = this.queryParams[LOVED_PRODUCT_QUERY_PARAM_KEYS.CATEGORY];

    if (category) {
      tempLovedProducts = tempLovedProducts.filter(lovedProduct =>
        category !== CATEGORY_VALUES.ALL
          ? lovedProduct.product.category.name === category
          : lovedProduct.product.category.name
      );
    }

    this.lovedProductsSubject.next(tempLovedProducts);
    this.setLovedProductsByPagination(tempLovedProducts);
  }

  setLovedProductsByPagination(filteredLovedProducts: TLovedProducts) {
    const page = Number(this.queryParams[LOVED_PRODUCT_QUERY_PARAM_KEYS.PAGE]);
    const offset = Number(
      this.queryParams[LOVED_PRODUCT_QUERY_PARAM_KEYS.OFFSET]
    );

    this.lovedProductsByPagination = filteredLovedProducts.slice(
      (page - 1) * offset,
      page * offset
    );

    this.lovedProductsByPaginationSubject.next(this.lovedProductsByPagination);
  }

  getLovedProductsByPagination(): Observable<TLovedProducts> {
    return this.lovedProductsByPaginationSubject.asObservable();
  }
}
