import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { filter } from "rxjs/operators";
import { CATEGORIES_VALUE, PRICES, QUERY_PARAM_KEYS } from "@/constants";
import { Observable, BehaviorSubject } from "rxjs";
import { PATH } from "@/configs/routes";
import { routeHelper } from "@/utilities/helperFunctions";
import { windowScrollHelper } from "@/utilities/helperFunctions";
import {
  TSetQueryParamsProps,
  TQueryParamKeyForSubscribes,
  TQueryParamValueForSubscribes,
} from "@/types";

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
  ];

  queryParamsSubscribesDefaultValue: Record<
    TQueryParamKeyForSubscribes,
    TQueryParamValueForSubscribes
  > = {
    searchTerm: "",
    category: CATEGORIES_VALUE.ALL,
    startPrice: PRICES.DEFAULT_FILTER_START_PRICE,
    endPrice: PRICES.DEFAULT_FILTER_END_PRICE,
  };

  queryParamSubjects: Record<
    TQueryParamKeyForSubscribes,
    BehaviorSubject<TQueryParamValueForSubscribes>
  > = {
    searchTerm: new BehaviorSubject<TQueryParamValueForSubscribes>(
      this.queryParamsSubscribesDefaultValue[QUERY_PARAM_KEYS.SEARCH_TERM]
    ),
    category: new BehaviorSubject<TQueryParamValueForSubscribes>(
      this.queryParamsSubscribesDefaultValue[QUERY_PARAM_KEYS.CATEGORY]
    ),
    startPrice: new BehaviorSubject<TQueryParamValueForSubscribes>(
      this.queryParamsSubscribesDefaultValue[QUERY_PARAM_KEYS.START_PRICE]
    ),
    endPrice: new BehaviorSubject<TQueryParamValueForSubscribes>(
      this.queryParamsSubscribesDefaultValue[QUERY_PARAM_KEYS.END_PRICE]
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

  getParamSearchTerm(): Observable<TQueryParamValueForSubscribes> {
    return this.queryParamSubjects[QUERY_PARAM_KEYS.SEARCH_TERM].asObservable();
  }

  // category
  getParamCategory(): Observable<TQueryParamValueForSubscribes> {
    return this.queryParamSubjects[QUERY_PARAM_KEYS.CATEGORY].asObservable();
  }

  // min price
  getParamStartPrice(): Observable<TQueryParamValueForSubscribes> {
    return this.queryParamSubjects[QUERY_PARAM_KEYS.START_PRICE].asObservable();
  }

  // max price
  getParamEndPrice(): Observable<TQueryParamValueForSubscribes> {
    return this.queryParamSubjects[QUERY_PARAM_KEYS.END_PRICE].asObservable();
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
    queryParams.forEach(({ key, value }) =>
      this.updateUrlQueryParams({ key: key, value: value })
    );

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
