import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { filter } from "rxjs/operators";
import {
  ROUTE_PERMITTED_QUERY_PARAM,
  AUTH_QUERY_PARAM_KEYS,
  PRODUCT_QUERY_PARAM_KEYS,
  CATEGORIES_VALUE,
  PAGINATION,
  PRICES,
} from "@/constants";
import { Observable, BehaviorSubject } from "rxjs";
import { PATH } from "@/configs/routes";
import { TQueryParamKeyForSubscribes, TSetQueryParamsProps } from "../types";
import { routeHelper } from "@/utilities";
import { scrollToTopImmediately } from "@/utilities/windowScrollHelper";

type TNavigateWithUrlOnly = {
  path: string | Array<string>;
  reload?: boolean;
};

type TNavigateWithParamsProps = {
  path: (typeof PATH)[keyof typeof PATH];
  queryParams: Array<TSetQueryParamsProps>;
  replaceAll?: boolean;
};
@Injectable({ providedIn: "root" })
export class RouteService {
  urlQueryParams: Params = {};

  queryParamsKeysForSubscribes: Array<TQueryParamKeyForSubscribes> = [
    // product
    PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM,
    PRODUCT_QUERY_PARAM_KEYS.CATEGORY,
    PRODUCT_QUERY_PARAM_KEYS.START_PRICE,
    PRODUCT_QUERY_PARAM_KEYS.END_PRICE,
    PRODUCT_QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION,
    PRODUCT_QUERY_PARAM_KEYS.PAGE,
    PRODUCT_QUERY_PARAM_KEYS.OFFSET,
    // auth
    AUTH_QUERY_PARAM_KEYS.REDIRECT_URL,
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
    redirectUrl: "",
  };

  queryParamSubjects: Record<
    TQueryParamKeyForSubscribes,
    BehaviorSubject<string>
  > = {
    searchTerm: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue[
        PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM
      ]
    ),
    category: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue[PRODUCT_QUERY_PARAM_KEYS.CATEGORY]
    ),
    startPrice: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue[
        PRODUCT_QUERY_PARAM_KEYS.START_PRICE
      ]
    ),
    endPrice: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue[PRODUCT_QUERY_PARAM_KEYS.END_PRICE]
    ),
    sortPriceDirection: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue[
        PRODUCT_QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION
      ]
    ),
    page: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue[PRODUCT_QUERY_PARAM_KEYS.PAGE]
    ),
    offset: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue[PRODUCT_QUERY_PARAM_KEYS.OFFSET]
    ),
    redirectUrl: new BehaviorSubject<string>(
      this.queryParamsSubscribesDefaultValue[AUTH_QUERY_PARAM_KEYS.REDIRECT_URL]
    ),
  };

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    // subscribe on every query param which exist on current url
    this.queryParamsKeysForSubscribes.forEach(queryParamKey => {
      this.activatedRoute.queryParams
        .pipe(filter(params => params[queryParamKey]))
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

    // check permitted query params on current url
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (Object.keys(queryParams).length > 0) {
        const currentRouteWithoutQueryParams =
          routeHelper.getCleanSpecificRoutePath(this.router.url, true);
        const urlQueryParams: Params = {};

        ROUTE_PERMITTED_QUERY_PARAM.forEach(permittedQueryParam => {
          if (
            permittedQueryParam.pathRegex.test(currentRouteWithoutQueryParams)
          ) {
            if (Object.keys(permittedQueryParam.keys).length === 0) {
              this.navigateWithUrlOnly({
                path: currentRouteWithoutQueryParams,
              });
            } else {
              let shouldReload = false;
              for (let key in queryParams) {
                if (Object.values(permittedQueryParam.keys).indexOf(key) > -1) {
                  urlQueryParams[key] = queryParams[key];
                } else {
                  shouldReload = true;
                }
              }
              if (shouldReload) {
                this.router.navigate([currentRouteWithoutQueryParams], {
                  queryParams: urlQueryParams,
                });
              }
            }
          }
        });
      } else {
        this.resetAllQueryParams();
      }
    });
  }

  // declare all query params observable
  // for products
  // search term
  getParamSearchTerm(): Observable<string> {
    return this.queryParamSubjects[
      PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM
    ].asObservable();
  }
  // category
  getParamCategory(): Observable<string> {
    return this.queryParamSubjects[
      PRODUCT_QUERY_PARAM_KEYS.CATEGORY
    ].asObservable();
  }
  // min price
  getParamStartPrice(): Observable<string> {
    return this.queryParamSubjects[
      PRODUCT_QUERY_PARAM_KEYS.START_PRICE
    ].asObservable();
  }
  // max price
  getParamEndPrice(): Observable<string> {
    return this.queryParamSubjects[
      PRODUCT_QUERY_PARAM_KEYS.END_PRICE
    ].asObservable();
  }
  // sort price direction
  getParamSortPriceDirection(): Observable<string> {
    return this.queryParamSubjects[
      PRODUCT_QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION
    ].asObservable();
  }
  // page
  getParamPage(): Observable<string> {
    return this.queryParamSubjects[
      PRODUCT_QUERY_PARAM_KEYS.PAGE
    ].asObservable();
  }
  // offset
  getParamOffset(): Observable<string> {
    return this.queryParamSubjects[
      PRODUCT_QUERY_PARAM_KEYS.OFFSET
    ].asObservable();
  }

  // for auth
  // redirect url
  getRedirectUrl(): Observable<string> {
    return this.queryParamSubjects[
      AUTH_QUERY_PARAM_KEYS.REDIRECT_URL
    ].asObservable();
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

  navigateWithParams({
    path,
    queryParams,
    replaceAll = false,
  }: TNavigateWithParamsProps) {
    if (replaceAll) {
      this.resetAllQueryParams();
    }

    // check which param has change before navigate
    // if the changed param is not page and offset => reset page and offset
    let shouldResetPageAndOffset = true;

    queryParams.forEach(({ key, value }) => {
      this.updateUrlQueryParams({ key: key, value: value });
      if (
        key === PRODUCT_QUERY_PARAM_KEYS.PAGE ||
        key === PRODUCT_QUERY_PARAM_KEYS.OFFSET
      )
        shouldResetPageAndOffset = false;
    });

    if (shouldResetPageAndOffset && !replaceAll) {
      this.updateUrlQueryParams({
        key: PRODUCT_QUERY_PARAM_KEYS.PAGE,
        value:
          this.queryParamsSubscribesDefaultValue[PRODUCT_QUERY_PARAM_KEYS.PAGE],
      });
      this.updateUrlQueryParams({
        key: PRODUCT_QUERY_PARAM_KEYS.OFFSET,
        value:
          this.queryParamsSubscribesDefaultValue[
            PRODUCT_QUERY_PARAM_KEYS.OFFSET
          ],
      });
    }

    this.router
      .navigate([path], { queryParams: this.urlQueryParams })
      .then(() => scrollToTopImmediately());
  }

  navigateWithUrlOnly({ path, reload = false }: TNavigateWithUrlOnly) {
    this.resetAllQueryParams();
    let url = "";
    if (Array.isArray(path)) {
      url = routeHelper.decodeUrl(path.join("/"));
    } else {
      url = routeHelper.decodeUrl(path);
    }

    if (reload) {
      this.router
        .navigateByUrl(PATH.DUMMY, { skipLocationChange: true })
        .then(() => {
          this.router.navigateByUrl(url).then(() => scrollToTopImmediately());
        });
    } else {
      this.router.navigateByUrl(url).then(() => scrollToTopImmediately());
    }
  }
}
