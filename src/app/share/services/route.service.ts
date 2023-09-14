import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { filter } from "rxjs/operators";
import { CATEGORIES_VALUE, PRICES, QUERY_PARAM_KEYS } from "@/constants";
import { Observable, BehaviorSubject } from "rxjs";
import { PATH } from "@/configs/routes";
import { routeHelper } from "@/utilities/helperFunctions";
import { TSetQueryParamsProps } from "@/app/features/product/services/product.service";

type TNavigateWithUrlOnly = {
  path: string;
};

type TNavigateWithParamsProps = {
  path: (typeof PATH)[keyof typeof PATH];
  queryParams: Array<TSetQueryParamsProps>;
};
@Injectable()
export class RouteService {
  queryParams: Params = {};
  paramSearchTermSubject = new BehaviorSubject<string>("");
  paramCategorySubject = new BehaviorSubject<string>(CATEGORIES_VALUE.ALL);
  paramStartPriceSubject = new BehaviorSubject<number>(
    PRICES.DEFAULT_FILTER_START_PRICE
  );
  paramEndPriceSubject = new BehaviorSubject<number>(
    PRICES.DEFAULT_FILTER_END_PRICE
  );

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      // check if query params exist and not in product page then remove all
      // remove all params state then redirect to current url
      const isHaveQueryParams: boolean = Object.keys(queryParams).length > 0;

      const isNotInProductPage: boolean =
        routeHelper.getCleanSpecificRoutePath(
          this.router.url,
          isHaveQueryParams
        ) !== PATH.LIST_PRODUCTS;

      if (isNotInProductPage && isHaveQueryParams) {
        const currentRoute = routeHelper.getCleanSpecificRoutePath(
          this.router.url,
          true
        );

        this.router
          .navigateByUrl(PATH.DUMMY, { skipLocationChange: true })
          .then(() => {
            this.resetAllQueryParams();
            this.router.navigate([currentRoute], {
              relativeTo: this.activatedRoute,
              queryParams: {},
            });
          });
      }

      // check if in product page and without any query params
      // then reset all params state and reset all filter
      if (!isNotInProductPage && !isHaveQueryParams) {
        this.resetAllQueryParams();
      }
    });

    // subscribe for search term
    this.activatedRoute.queryParams
      .pipe(filter(params => params[QUERY_PARAM_KEYS.SEARCH_TERM]))
      .subscribe(param => {
        const paramValue = param[QUERY_PARAM_KEYS.SEARCH_TERM] as string;

        this.updateQueryParams({
          key: QUERY_PARAM_KEYS.SEARCH_TERM,
          value: paramValue,
        });
        this.paramSearchTermSubject.next(paramValue || "");
      });

    // subscribe for category
    this.activatedRoute.queryParams
      .pipe(filter(params => params[QUERY_PARAM_KEYS.CATEGORY]))
      .subscribe(param => {
        const paramValue = param[QUERY_PARAM_KEYS.CATEGORY] as string;

        this.updateQueryParams({
          key: QUERY_PARAM_KEYS.CATEGORY,
          value: paramValue,
        });
        this.paramCategorySubject.next(paramValue || CATEGORIES_VALUE.ALL);
      });

    // subscribe for start price
    this.activatedRoute.queryParams
      .pipe(filter(params => params[QUERY_PARAM_KEYS.START_PRICE]))
      .subscribe(param => {
        const paramValue = param[QUERY_PARAM_KEYS.START_PRICE] as number;

        this.updateQueryParams({
          key: QUERY_PARAM_KEYS.START_PRICE,
          value: paramValue,
        });
        this.paramStartPriceSubject.next(
          paramValue || PRICES.DEFAULT_FILTER_START_PRICE
        );
      });

    // subscribe for end price
    this.activatedRoute.queryParams
      .pipe(filter(params => params[QUERY_PARAM_KEYS.END_PRICE]))
      .subscribe(param => {
        const paramValue = param[QUERY_PARAM_KEYS.END_PRICE] as number;

        this.updateQueryParams({
          key: QUERY_PARAM_KEYS.END_PRICE,
          value: paramValue,
        });
        this.paramEndPriceSubject.next(
          paramValue || PRICES.DEFAULT_FILTER_END_PRICE
        );
      });
  }

  updateQueryParams({ key, value }: TSetQueryParamsProps) {
    if (value) {
      this.queryParams[key] = value;
    } else {
      delete this.queryParams[key];
    }

    // should reorder query params here
    this.queryParams = routeHelper.sortQueryParamsInOrder(this.queryParams);
  }

  resetAllQueryParams() {
    this.queryParams = {};
    this.paramSearchTermSubject.next("");
    this.paramCategorySubject.next(CATEGORIES_VALUE.ALL);
    this.paramStartPriceSubject.next(PRICES.DEFAULT_FILTER_START_PRICE);
    this.paramEndPriceSubject.next(PRICES.DEFAULT_FILTER_END_PRICE);
  }

  navigateWithParams({ path, queryParams }: TNavigateWithParamsProps) {
    queryParams.forEach(({ key, value }) =>
      this.updateQueryParams({ key: key, value: value })
    );

    this.router.navigate([path], { queryParams: this.queryParams });
  }

  navigateWithUrlOnly({ path }: TNavigateWithUrlOnly) {
    this.router.navigateByUrl(path);
    this.resetAllQueryParams();
  }

  // search term
  getParamSearchTerm(): Observable<string> {
    return this.paramSearchTermSubject.asObservable();
  }

  // category
  getParamCategory(): Observable<string> {
    return this.paramCategorySubject.asObservable();
  }

  // min price
  getParamStartPrice(): Observable<number> {
    return this.paramStartPriceSubject.asObservable();
  }

  // max price
  getParamEndPrice(): Observable<number> {
    return this.paramEndPriceSubject.asObservable();
  }
}
