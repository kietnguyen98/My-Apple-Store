import { TProduct, TProducts } from "@/types";
import { Injectable } from "@angular/core";
import { products } from "@/data/products";
import { CATEGORIES_VALUE, PAGINATION } from "@/constants";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { RouteService } from "@/app/share/services/route.service";
import { QUERY_PARAM_KEYS } from "@/constants";

type TProductsQueryParams = Partial<
  Record<
    (typeof QUERY_PARAM_KEYS)[keyof typeof QUERY_PARAM_KEYS],
    string | number
  >
>;

export type TSetQueryParamsProps = {
  key: (typeof QUERY_PARAM_KEYS)[keyof typeof QUERY_PARAM_KEYS];
  value: string | number;
};

@Injectable({ providedIn: "root" })
export class ProductService {
  detailProductSubject = new BehaviorSubject<TProduct | null>(null);
  listProductsSubject = new Subject<TProducts>();
  listProductsByPaginationSubject = new Subject<TProducts>();
  listProducts: TProducts = [];
  listProductsByPagination: TProducts = [];
  queryParams: TProductsQueryParams = {
    page: 1,
    offset: PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value,
  };
  detailProduct: TProduct | null = null;

  constructor(private routeService: RouteService) {
    // detect change on query params
    this.routeService.getParamSearchTerm().subscribe(searchTerm =>
      this.setQueryParams({
        key: QUERY_PARAM_KEYS.SEARCH_TERM,
        value: searchTerm,
      })
    );

    this.routeService.getParamCategory().subscribe(category =>
      this.setQueryParams({
        key: QUERY_PARAM_KEYS.CATEGORY,
        value: category,
      })
    );

    this.routeService.getParamStartPrice().subscribe(price =>
      this.setQueryParams({
        key: QUERY_PARAM_KEYS.START_PRICE,
        value: price,
      })
    );

    this.routeService.getParamEndPrice().subscribe(price =>
      this.setQueryParams({
        key: QUERY_PARAM_KEYS.END_PRICE,
        value: price,
      })
    );
  }

  setProductDetail(product: TProduct) {
    this.detailProduct = product;
    this.detailProductSubject.next(this.detailProduct);
  }

  getProductDetail(): Observable<TProduct | null> {
    return this.detailProductSubject.asObservable();
  }

  setQueryParams({ key, value }: TSetQueryParamsProps) {
    this.queryParams[key] = value;
    this.setListProducts();
  }

  setListProducts() {
    let tempProducts = [...products];
    const searchTerm = this.queryParams.searchTerm;
    const category = this.queryParams.category;
    const startPrice = this.queryParams.startPrice;
    const endPrice = this.queryParams.endPrice;
    const sortPriceDirection = this.queryParams.sortPriceDirection;

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
    if (sortPriceDirection) {
      tempProducts = tempProducts.sort((current, next) =>
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

  setListProductsByPagination() {
    const page = (this.queryParams.page as number) || 1;
    const offset =
      (this.queryParams.offset as number) ||
      (PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value as number);

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
}
