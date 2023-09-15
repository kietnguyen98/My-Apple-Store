import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { filter } from "rxjs/operators";
import {
  CATEGORIES_VALUE,
  PAGINATION,
  PRICES,
  QUERY_PARAM_KEYS,
} from "@/constants";
import { Observable, BehaviorSubject } from "rxjs";
import { PATH } from "@/configs/routes";
import { routeHelper } from "@/utilities/helperFunctions";
import { windowScrollHelper } from "@/utilities/helperFunctions";
import { TSetQueryParamsProps, TQueryParamKeyForSubscribes } from "@/types";

type TNavigateWithUrlOnly = {
  path: string | Array<string>;
  reload?: boolean;
};

type TNavigateWithParamsProps = {
  path: (typeof PATH)[keyof typeof PATH];
  queryParams: Array<TSetQueryParamsProps>;
};
@Injectable()
export class RouteService {
  urlQueryParams: Params = {};

  queryParamsKeysForSubscribes: Array<TQueryParamKeyForSubscribes> = [
    QUERY_PARAM_KEYS.SEARCH_TERM,
    QUERY_PARAM_KEYS.CATEGORY,
    QUERY_PARAM_KEYS.START_PRICE,
    QUERY_PARAM_KEYS.END_PRICE,
    QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION,
    QUERY_PARAM_KEYS.PAGE,
    QUERY_PARAM_KEYS.OFFSET,
  ];

  queryParamsSubscribesDefaultValue: Record<
    TQueryParamKeyForSubscribes,
    string
  > = {
    searchTerm: "",
    category: CATEGORIES_VALUE.ALL,
    startPrice: PRICES.DEFAULT_FILTER_START_PRICE.toString(),
    endPrice: PRICES.DEFAULT_FILTER_END_PRICE.toString(),
    sortPriceDirection: "0",
    page: "1",
    offset: PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value.toString(),
  };

  queryParamSubjects: Record<
    TQueryParamKeyForSubscribes,
    BehaviorSubject<string>
  > = {
    searchTerm: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue.searchTerm
    ),
    category: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue.category
    ),
    startPrice: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue.startPrice
    ),
    endPrice: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue.endPrice
    ),
    sortPriceDirection: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue.sortPriceDirection
    ),
    page: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue.page
    ),
    offset: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue.offset
    ),
  };

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

    this.queryParamsKeysForSubscribes.forEach(queryParamKey => {
      this.activatedRoute.queryParams
        // get exact query param
        .pipe(filter(params => params[queryParamKey]))
        // subscribe that query param
        .subscribe(param => {
          const paramValue = param[queryParamKey];
          this.updateUrlQueryParams({
            key: queryParamKey,
            value: paramValue,
          });
          this.queryParamSubjects[queryParamKey].next(
            paramValue || this.queryParamsSubscribesDefaultValue[queryParamKey]
          );
        });
    });
  }

  // declare all query params observable
  // search term
  getParamSearchTerm(): Observable<string> {
    return this.queryParamSubjects[QUERY_PARAM_KEYS.SEARCH_TERM].asObservable();
  }
  // category
  getParamCategory(): Observable<string> {
    return this.queryParamSubjects[QUERY_PARAM_KEYS.CATEGORY].asObservable();
  }
  // min price
  getParamStartPrice(): Observable<string> {
    return this.queryParamSubjects[QUERY_PARAM_KEYS.START_PRICE].asObservable();
  }
  // max price
  getParamEndPrice(): Observable<string> {
    return this.queryParamSubjects[QUERY_PARAM_KEYS.END_PRICE].asObservable();
  }
  // sort price direction
  getParamSortPriceDirection(): Observable<string> {
    return this.queryParamSubjects[
      QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION
    ].asObservable();
  }
  // page
  getParamPage(): Observable<string> {
    return this.queryParamSubjects[QUERY_PARAM_KEYS.PAGE].asObservable();
  }
  // offset
  getParamOffset(): Observable<string> {
    return this.queryParamSubjects[QUERY_PARAM_KEYS.OFFSET].asObservable();
  }

  updateUrlQueryParams({ key, value }: TSetQueryParamsProps) {
    if (value) {
      this.urlQueryParams[key] = value;
    } else {
      delete this.urlQueryParams[key];
    }

    // should reorder query params here
    this.urlQueryParams = routeHelper.sortQueryParamsInOrder(
      this.urlQueryParams
    );
  }

  resetAllQueryParams() {
    this.urlQueryParams = {};
    this.queryParamsKeysForSubscribes.forEach(queryParamKey => {
      this.queryParamSubjects[queryParamKey].next(
        this.queryParamsSubscribesDefaultValue[queryParamKey]
      );
    });
  }

  navigateWithParams({ path, queryParams }: TNavigateWithParamsProps) {
    // check which param has change before navigate
    // if the changed param is not page and offset => reset page and offset
    let shouldResetPageAndOffset = true;

    queryParams.forEach(({ key, value }) => {
      this.updateUrlQueryParams({ key: key, value: value });
      if (key === QUERY_PARAM_KEYS.PAGE || key === QUERY_PARAM_KEYS.OFFSET)
        shouldResetPageAndOffset = false;
    });

    if (shouldResetPageAndOffset) {
      this.updateUrlQueryParams({
        key: QUERY_PARAM_KEYS.PAGE,
        value: this.queryParamsSubscribesDefaultValue.page,
      });
      this.updateUrlQueryParams({
        key: QUERY_PARAM_KEYS.OFFSET,
        value: this.queryParamsSubscribesDefaultValue.offset,
      });
    }

    this.router
      .navigate([path], { queryParams: this.urlQueryParams })
      .then(() => windowScrollHelper.scrollToTopImmediately());
  }

  navigateWithUrlOnly({ path, reload = false }: TNavigateWithUrlOnly) {
    let url = "";
    if (Array.isArray(path)) {
      url = path.join("/");
    } else {
      url = path;
    }

    this.resetAllQueryParams();

    if (reload) {
      this.router
        .navigateByUrl(PATH.DUMMY, { skipLocationChange: true })
        .then(() => {
          this.router
            .navigateByUrl(url)
            .then(() => windowScrollHelper.scrollToTopImmediately());
        });
    } else {
      this.router
        .navigateByUrl(url)
        .then(() => windowScrollHelper.scrollToTopImmediately());
    }
  }
}
