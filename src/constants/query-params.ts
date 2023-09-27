import { PATH } from "@/configs/routes";

export const PRODUCT_QUERY_PARAM_KEYS = {
  SEARCH_TERM: "searchTerm",
  CATEGORY: "category",
  STATUS: "status",
  START_PRICE: "startPrice",
  END_PRICE: "endPrice",
  SORT_PRICE_DIRECTION: "sortPriceDirection",
  PAGE: "page",
  OFFSET: "offset",
} as const;

export const AUTH_QUERY_PARAM_KEYS = {
  REDIRECT_URL: "redirectUrl",
} as const;

export const ROUTE_PERMITTED_QUERY_PARAM: Array<{
  pathRegex: RegExp;
  keys: Record<string, string>;
}> = [
  // home
  { pathRegex: new RegExp(`^${PATH.HOME}$`), keys: {} },
  // list products
  {
    pathRegex: new RegExp(`^${PATH.LIST_PRODUCTS}$`),
    keys: PRODUCT_QUERY_PARAM_KEYS,
  },
  // product detail
  {
    pathRegex: new RegExp(`^${PATH.LIST_PRODUCTS}/[a-zA-Z0-9\\s\)\(]+$`),
    keys: {},
  },
  // login
  {
    pathRegex: new RegExp(`^${PATH.LOGIN}$`),
    keys: AUTH_QUERY_PARAM_KEYS,
  },
  // sign up
  {
    pathRegex: new RegExp(`^${PATH.SIGN_UP}$`),
    keys: AUTH_QUERY_PARAM_KEYS,
  },
];
