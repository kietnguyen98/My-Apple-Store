import { TProduct, TProducts } from "@/types";
import { Injectable } from "@angular/core";
import { products } from "@/data/products";
import { CATEGORIES, PAGINATION } from "@/constants";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { RouteService } from "@/app/share/services/route.service";

export type TProductsQueryParams = {
  searchTerm?: string;
  category?: string;
  startPrice?: number;
  endPrice?: number;
  sortPriceDirection?: number;
  page?: number;
  offset?: number;
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
    this.routeService.getParamSearchTerm().subscribe(searchTerm => {
      this.setQueryParams({ searchTerm: searchTerm || "" });
    });
  }

  setProductDetail(product: TProduct) {
    this.detailProduct = product;
    this.detailProductSubject.next(this.detailProduct);
  }

  getProductDetail(): Observable<TProduct | null> {
    return this.detailProductSubject.asObservable();
  }

  setQueryParams({
    searchTerm,
    category,
    startPrice,
    endPrice,
    sortPriceDirection,
    page,
    offset,
  }: TProductsQueryParams) {
    this.queryParams = {
      ...this.queryParams,
      searchTerm: searchTerm || this.queryParams.searchTerm,
      category: category || this.queryParams.category,
      startPrice: startPrice || this.queryParams.startPrice,
      endPrice: endPrice || this.queryParams.endPrice,
      sortPriceDirection:
        sortPriceDirection || this.queryParams.sortPriceDirection,
      page: page || this.queryParams.page,
      offset: (offset || this.queryParams.offset) as number,
    };

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
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // filter by category values
    if (category) {
      tempProducts = tempProducts.filter(product =>
        category !== CATEGORIES.ALL_VALUE
          ? product.category.name === category
          : product.category.name
      );
    }

    // filter by price range
    if (startPrice && endPrice) {
      tempProducts = tempProducts.filter(
        product => product.price >= startPrice && product.price <= endPrice
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
    const page = this.queryParams.page || 1;
    const offset =
      this.queryParams.offset ||
      PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value;
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
