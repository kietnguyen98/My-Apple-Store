import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, Params, NavigationEnd } from "@angular/router";
import {
  PRODUCT_QUERY_PARAM_KEYS,
  PAGINATION,
  QUERY_PARAMS_TO_SUBSCRIBES_ON_PATH,
} from "@/app/share/constants";
import { Observable, BehaviorSubject } from "rxjs";
import { PATH } from "@/configs/routes";
import { TUpdateQueryParamsProps } from "../types";
import { routeHelper } from "@/utilities";
import { scrollToTopImmediately } from "@/utilities/windowScrollHelper";
import { TNavigateWithParamsProps, TNavigateWithUrlOnlyProps } from "../types";
import { queryParamsMiddleware } from "../middlewares";
@Injectable({ providedIn: "root" })
export class RouteService {
  currentPathSubject = new BehaviorSubject<string>("");
  urlQueryParams: Params = {};
  queryParamsSubject = {
    PRODUCTS: new BehaviorSubject<Params>({}),
    LOGIN: new BehaviorSubject<Params>({}),
    SIGN_UP: new BehaviorSubject<Params>({}),
  };

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    // subscribes for route change and get current path
    this.router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
        this.currentPathSubject.next(this.router.url);
      }
    });

    // subscribe for query params change
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const isHaveQueryParams = Object.keys(queryParams).length > 0;
      const currentPathWithoutQueryParams =
        routeHelper.getCleanSpecificRoutePath(
          this.router.url,
          isHaveQueryParams
        );

      for (let [keyOfRouteObject, routeObject] of Object.entries(
        QUERY_PARAMS_TO_SUBSCRIBES_ON_PATH
      )) {
        if (routeObject.PATH_REGEX.test(currentPathWithoutQueryParams)) {
          if (isHaveQueryParams) {
            const { queryParamsForSubscribe } = queryParamsMiddleware({
              currentPathWithoutQueryParams: currentPathWithoutQueryParams,
              currentQueryParams: queryParams,
              permittedQueryParams: routeObject.PERMITTED_QUERY_PARAMS,
              navigateWithUrlOnly: this.navigateWithUrlOnly,
              navigateWithQueryParams: this.navigateWithQueryParams,
            });

            this.queryParamsSubject[
              keyOfRouteObject as keyof typeof this.queryParamsSubject
            ].next(queryParamsForSubscribe);

            return;
          }
        }
      }
      this.resetQueryParams();
    });
  }

  // current path observable
  getCurrentPath(): Observable<string> {
    return this.currentPathSubject.asObservable();
  }

  // all query params observable
  // for products
  getProductQueryParams(): Observable<Params> {
    return this.queryParamsSubject.PRODUCTS.asObservable();
  }
  // for login
  getLoginQueryParams(): Observable<Params> {
    return this.queryParamsSubject.LOGIN.asObservable();
  }
  // for sign up
  getSignUpQueryParams(): Observable<Params> {
    return this.queryParamsSubject.SIGN_UP.asObservable();
  }

  updateUrlQueryParams(queryParams: TUpdateQueryParamsProps) {
    for (let [key, value] of Object.entries(queryParams)) {
      if (value) {
        this.urlQueryParams[key] = value;
      } else {
        delete this.urlQueryParams[key];
      }
    }
    // should reorder query params here
    this.urlQueryParams = routeHelper.sortQueryParamsInOrder(
      this.urlQueryParams
    );
  }

  resetQueryParams() {
    this.urlQueryParams = {};
    for (let key in this.queryParamsSubject) {
      let defaultQueryParams: Params = {};
      QUERY_PARAMS_TO_SUBSCRIBES_ON_PATH[
        key as keyof typeof QUERY_PARAMS_TO_SUBSCRIBES_ON_PATH
      ]?.PERMITTED_QUERY_PARAMS.forEach(queryParam => {
        defaultQueryParams[queryParam.KEY] = queryParam.DEFAULT_VALUE;
      });

      this.queryParamsSubject[key as keyof typeof this.queryParamsSubject].next(
        defaultQueryParams
      );
    }
  }

  navigateWithQueryParams({
    path,
    queryParams,
    replaceAll = false,
  }: TNavigateWithParamsProps) {
    if (replaceAll) {
      this.resetQueryParams();
    }
    // check which param has change before navigate
    // if the changed param is not page and offset => reset page and offset
    let shouldResetPageAndOffset = true;

    this.updateUrlQueryParams(queryParams);

    for (let key in queryParams) {
      if (
        key === PRODUCT_QUERY_PARAM_KEYS.PAGE ||
        key === PRODUCT_QUERY_PARAM_KEYS.OFFSET
      )
        shouldResetPageAndOffset = false;
    }

    if (shouldResetPageAndOffset && !replaceAll) {
      this.updateUrlQueryParams({
        page: 1,
        offset: PAGINATION.DEFAULT_OFFSET_OPTION.value.toString(),
      });
    }

    this.router
      .navigate([path], { queryParams: this.urlQueryParams })
      .then(() => scrollToTopImmediately());
  }

  navigateWithUrlOnly({ path, reload = false }: TNavigateWithUrlOnlyProps) {
    this.resetQueryParams();

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
