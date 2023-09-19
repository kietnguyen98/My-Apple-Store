import {
  TProduct,
  TProductQueryParamKeys,
  TProducts,
  TProductsQueryParams,
  TSetQueryParamsProps,
} from "@/types";
import { Injectable } from "@angular/core";
import { products } from "@/data/products";
import { CATEGORIES_VALUE } from "@/constants";
import { Observable, BehaviorSubject } from "rxjs";
import { RouteService } from "@/app/share/services/route.service";
import { PRODUCT_QUERY_PARAM_KEYS } from "@/constants";

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
    this.routeService.getParamSearchTerm().subscribe(paramValue =>
      this.setQueryParams({
        key: PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM,
        value: paramValue,
      })
    );

    this.routeService.getParamCategory().subscribe(paramValue =>
      this.setQueryParams({
        key: PRODUCT_QUERY_PARAM_KEYS.CATEGORY,
        value: paramValue,
      })
    );

    this.routeService.getParamStartPrice().subscribe(paramValue =>
      this.setQueryParams({
        key: PRODUCT_QUERY_PARAM_KEYS.START_PRICE,
        value: Number(paramValue),
      })
    );

    this.routeService.getParamEndPrice().subscribe(paramValue =>
      this.setQueryParams({
        key: PRODUCT_QUERY_PARAM_KEYS.END_PRICE,
        value: Number(paramValue),
      })
    );

    this.routeService.getParamSortPriceDirection().subscribe(paramValue =>
      this.setQueryParams({
        key: PRODUCT_QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION,
        value: Number(paramValue),
      })
    );

    this.routeService.getParamPage().subscribe(paramValue =>
      this.setQueryParams({
        key: PRODUCT_QUERY_PARAM_KEYS.PAGE,
        value: Number(paramValue),
      })
    );

    this.routeService.getParamOffset().subscribe(paramValue =>
      this.setQueryParams({
        key: PRODUCT_QUERY_PARAM_KEYS.OFFSET,
        value: Number(paramValue),
      })
    );
  }

  setQueryParams({ key, value }: TSetQueryParamsProps) {
    this.queryParams[key as TProductQueryParamKeys] = value;
    this.setListProducts();
  }

  // list products filter
  setListProducts() {
    let tempProducts = [...products];
    const searchTerm = this.queryParams[PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM];
    const category = this.queryParams[PRODUCT_QUERY_PARAM_KEYS.CATEGORY];
    const startPrice = this.queryParams[PRODUCT_QUERY_PARAM_KEYS.START_PRICE];
    const endPrice = this.queryParams[PRODUCT_QUERY_PARAM_KEYS.END_PRICE];
    const sortPriceDirection =
      this.queryParams[PRODUCT_QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION];

    // filter by search term
    if (searchTerm) {
      tempProducts = tempProducts.filter(product =>
        product.name
          .toLowerCase()
          .includes((searchTerm as string).toLowerCase())
      );
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
      tempProducts = tempProducts.filter(
        product =>
          product.price >= (startPrice as number) &&
          product.price <= (endPrice as number)
      );
    }

    // filter by sort price directions values
    if (sortPriceDirection !== 0) {
      tempProducts.sort((current, next) =>
        sortPriceDirection === -1
          ? current.price - next.price
          : next.price - current.price
      );
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
