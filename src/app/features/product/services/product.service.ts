import { Injectable } from "@angular/core";
import { products } from "@/app/features/product/data/products.data";
import { CATEGORIES_VALUE, PRODUCT_STATUS_VALUES } from "@/constants";
import { Observable, BehaviorSubject } from "rxjs";
import { RouteService } from "@/app/share/services/route.service";
import { PRODUCT_QUERY_PARAM_KEYS } from "@/constants";
import { TProduct, TProducts } from "../types";
import { TProductsQueryParams } from "@/app/share/types";
import { productHelper } from "@/utilities";

@Injectable({ providedIn: "root" })
export class ProductService {
  detailProductSubject = new BehaviorSubject<TProduct | null>(null);
  listProductsSubject = new BehaviorSubject<TProducts>([]);
  listProductsByPaginationSubject = new BehaviorSubject<TProducts>([]);
  listProducts: TProducts = [];
  listProductsByPagination: TProducts = [];
  queryParams: TProductsQueryParams = {};
  detailProduct: TProduct | null = null;

  constructor(private routeService: RouteService) {
    // detect change on query params
    this.routeService.getProductQueryParams().subscribe(queryParams => {
      this.queryParams = queryParams as TProductsQueryParams;
      this.setListProducts();
    });
  }

  // list products filter
  setListProducts() {
    let tempProducts = [...products];
    const searchTerm = this.queryParams[
      PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM
    ] as string;
    const status = this.queryParams[PRODUCT_QUERY_PARAM_KEYS.STATUS] as string;
    const category = this.queryParams[
      PRODUCT_QUERY_PARAM_KEYS.CATEGORY
    ] as string;
    const startPrice = this.queryParams[
      PRODUCT_QUERY_PARAM_KEYS.START_PRICE
    ] as number;
    const endPrice = this.queryParams[
      PRODUCT_QUERY_PARAM_KEYS.END_PRICE
    ] as number;
    const sortPriceDirection = this.queryParams[
      PRODUCT_QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION
    ] as number;

    // filter by search term
    if (searchTerm) {
      tempProducts = tempProducts.filter(product =>
        product.name
          .toLowerCase()
          .includes((searchTerm as string).toLowerCase())
      );
    }

    // filter by status values
    if (status) {
      const filterValues = status.split(",");
      // filter on sale
      if (filterValues.indexOf(PRODUCT_STATUS_VALUES.ON_SALE) > -1) {
        tempProducts = tempProducts.filter(
          product => product.salePercentage > 0
        );
      }
      // filter is hot
      if (filterValues.indexOf(PRODUCT_STATUS_VALUES.IS_HOT) > -1) {
        tempProducts = tempProducts.filter(product => product.isHot);
      }
    }

    // filter by category values
    if (category) {
      tempProducts = tempProducts.filter(product =>
        category !== CATEGORIES_VALUE.ALL
          ? product.category.name === category
          : product.category.name
      );
    }

    // filter by price range
    if (startPrice && endPrice) {
      tempProducts = tempProducts.filter(product => {
        const exactProductPrice = productHelper.getExactPrice(
          product,
          product.memoryCapacities?.[0]
        );

        return (
          exactProductPrice >= (startPrice as number) &&
          exactProductPrice <= (endPrice as number)
        );
      });
    }

    // filter by sort price directions values
    if (sortPriceDirection !== 0) {
      tempProducts.sort((currentProduct, nextProduct) => {
        const exactCurrentProductPrice = productHelper.getExactPrice(
          currentProduct,
          currentProduct.memoryCapacities?.[0]
        );

        const exactNextProductPrice = productHelper.getExactPrice(
          nextProduct,
          nextProduct.memoryCapacities?.[0]
        );

        return sortPriceDirection === -1
          ? exactCurrentProductPrice - exactNextProductPrice
          : exactNextProductPrice - exactCurrentProductPrice;
      });
    }

    this.listProducts = tempProducts;
    this.listProductsSubject.next(this.listProducts);

    this.setListProductsByPagination();
  }

  getListProducts(): Observable<TProducts> {
    return this.listProductsSubject.asObservable();
  }

  // list products by pagination after filter
  setListProductsByPagination() {
    const page = this.queryParams[PRODUCT_QUERY_PARAM_KEYS.PAGE] as number;
    const offset = this.queryParams[PRODUCT_QUERY_PARAM_KEYS.OFFSET] as number;

    let tempProducts = [...this.listProducts];
    this.listProductsByPagination = tempProducts.slice(
      (page - 1) * offset,
      page * offset
    );

    this.listProductsByPaginationSubject.next(this.listProductsByPagination);
  }

  getListProductsByPagination(): Observable<TProducts> {
    return this.listProductsByPaginationSubject.asObservable();
  }

  // product detail
  setProductDetail(product: TProduct) {
    this.detailProduct = product;
    this.detailProductSubject.next(this.detailProduct);
  }

  getProductDetail(): Observable<TProduct | null> {
    return this.detailProductSubject.asObservable();
  }
}
