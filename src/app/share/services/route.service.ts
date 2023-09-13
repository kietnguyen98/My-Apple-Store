import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { filter } from "rxjs/operators";
import { QUERY_PARAM_KEYS } from "@/constants";
import { Observable, BehaviorSubject } from "rxjs";
import { PATH } from "@/configs/routes";

@Injectable()
export class RouteService {
  paramSearchTermSubject = new BehaviorSubject<string>("");

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      // check if query params exist and not in product page then remove all
      // remove all params state then redirect to current url
      const isHaveQueryParams = Object.keys(queryParams).length > 0;

      const isNotInProductPage = isHaveQueryParams
        ? this.router.url.split("?")[0].replaceAll("/", "") !==
          PATH.LIST_PRODUCTS
        : this.router.url.replaceAll("/", "") !== PATH.LIST_PRODUCTS;

      if (isNotInProductPage && isHaveQueryParams) {
        const currentRoute = this.router.url
          .split("?")[0]
          .replaceAll("%20", " ") // encode
          .replaceAll("%28", "(") // encode
          .replaceAll("%29", ")"); // encode;
        this.router
          .navigateByUrl(PATH.DUMMY, { skipLocationChange: true })
          .then(() => {
            this.clearAllParamsState();
            this.router.navigate([currentRoute], {
              relativeTo: this.activatedRoute,
              queryParams: {},
            });
          });
      }

      // check if in product page and without any query params
      // then reset all params state and reset all filter

      if (!isNotInProductPage && !isHaveQueryParams) {
        this.clearAllParamsState();
      }
    });

    this.activatedRoute.queryParams
      .pipe(filter(params => params[QUERY_PARAM_KEYS.SEARCH]))
      .subscribe(params => {
        this.paramSearchTermSubject.next(params[QUERY_PARAM_KEYS.SEARCH] || "");
      });
  }

  getSearchProducts(searchTerm: string) {
    let searchParams: Params = {};
    searchParams[QUERY_PARAM_KEYS.SEARCH] = searchTerm;
    this.router.navigate([PATH.LIST_PRODUCTS], {
      queryParams: searchParams,
    });
  }

  getParamSearchTerm(): Observable<string> {
    return this.paramSearchTermSubject.asObservable();
  }

  clearAllParamsState() {
    this.paramSearchTermSubject.next("");
  }
}
