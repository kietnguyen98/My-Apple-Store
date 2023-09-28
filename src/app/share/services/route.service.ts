import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import {
  PRODUCT_QUERY_PARAM_KEYS,
  PAGINATION,
  QUERY_PARAMS_TO_SUBSCRIBES,
} from "@/constants";
import { Observable, BehaviorSubject } from "rxjs";
import { PATH } from "@/configs/routes";
import { TUpdateQueryParamsProps } from "../types";
import { routeHelper } from "@/utilities";
import { scrollToTopImmediately } from "@/utilities/windowScrollHelper";

type TNavigateWithUrlOnlyProps = {
  path: string | Array<string>;
  reload?: boolean;
};

type TNavigateWithParamsProps = {
  path: (typeof PATH)[keyof typeof PATH];
  queryParams: TUpdateQueryParamsProps;
  replaceAll?: boolean;
};
@Injectable({ providedIn: "root" })
export class RouteService {
  urlQueryParams: Params = {};
  queryParamsSubject = {
    LIST_PRODUCT: new BehaviorSubject<Params>({}),
    LOGIN: new BehaviorSubject<Params>({}),
    SIGN_UP: new BehaviorSubject<Params>({}),
  };

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      const cloneQueryParams = { ...queryParams };
      const isHaveQueryParams = Object.keys(cloneQueryParams).length > 0;
      const currentPathWithoutQueryParams =
        routeHelper.getCleanSpecificRoutePath(
          this.router.url,
          isHaveQueryParams
        );

      for (let [keyOfRouteObject, routeObject] of Object.entries(
        QUERY_PARAMS_TO_SUBSCRIBES
      )) {
        if (routeObject.PATH_REGEX.test(currentPathWithoutQueryParams)) {
          if (routeObject.PERMITTED_QUERY_PARAMS.length === 0) {
            this.navigateWithUrlOnly({ path: currentPathWithoutQueryParams });
          } else {
            let shouldReload = false;
            let validQueryParamsOnUrl: Params = {};
            for (let key in cloneQueryParams) {
              let isKeyPermitted = false;
              routeObject.PERMITTED_QUERY_PARAMS.forEach(queryParam => {
                if (key === queryParam.KEY) {
                  isKeyPermitted = true;
                }
              });
              if (!isKeyPermitted) {
                delete cloneQueryParams[key];
                shouldReload = true;
              } else {
                validQueryParamsOnUrl[key] = cloneQueryParams[key];
              }
            }

            if (shouldReload) {
              this.navigateWithQueryParams({
                path: currentPathWithoutQueryParams,
                queryParams: validQueryParamsOnUrl,
                replaceAll: true,
              });
            }

            // all query params from url are valid
            // create queryParamsForSubscribe object with default value
            let queryParamsForSubscribe: Params = {};
            routeObject.PERMITTED_QUERY_PARAMS.forEach(queryParam => {
              queryParamsForSubscribe[queryParam.KEY] =
                queryParam.DEFAULT_VALUE;
            });

            // update queryParamsForSubscribe object with valid values on url
            for (let key in validQueryParamsOnUrl) {
              queryParamsForSubscribe[key] = validQueryParamsOnUrl[key];
            }

            for (let key in this.queryParamsSubject) {
              if (keyOfRouteObject === key) {
                this.queryParamsSubject[
                  key as keyof typeof this.queryParamsSubject
                ].next(queryParamsForSubscribe);
              }
            }
          }
          return;
        }
      }
      this.resetQueryParams();
    });
  }

  // declare all query params observable
  // for products
  getProductQueryParams(): Observable<Params> {
    return this.queryParamsSubject.LIST_PRODUCT.asObservable();
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
      QUERY_PARAMS_TO_SUBSCRIBES[
        key as keyof typeof QUERY_PARAMS_TO_SUBSCRIBES
      ].PERMITTED_QUERY_PARAMS.forEach(queryParam => {
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
      });
      this.updateUrlQueryParams({
        offset: PAGINATION.NUM_ELEMENTS_PER_PAGE_OPTIONS[2].value.toString(),
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
