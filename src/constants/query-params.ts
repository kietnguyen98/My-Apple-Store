import { PATH } from "@/configs/routes";

const PRODUCT_QUERY_PARAM_KEYS = {
  SEARCH_TERM: "searchTerm",
  CATEGORY: "category",
  START_PRICE: "startPrice",
  END_PRICE: "endPrice",
  SORT_PRICE_DIRECTION: "sortPriceDirection",
  PAGE: "page",
  OFFSET: "offset",
};

const AUTH_QUERY_PARAM_KEYS = {
  REDIRECT_URL: "redirectUrl",
};

const ROUTE_PERMITTED_QUERY_PARAM_KEYS = [
  // home
  { pathRegex: new RegExp(`^${PATH.HOME}$`), queryParamKeys: {} },
  // list products
  {
    pathRegex: new RegExp(`^${PATH.LIST_PRODUCTS}$`),
    queryParamKeys: PRODUCT_QUERY_PARAM_KEYS,
  },
  // product detail
  {
    pathRegex: new RegExp(`^${PATH.LIST_PRODUCTS}/[a-zA-Z0-9\\s\)\(]+$`),
    queryParamKeys: {},
  },
  // login
  {
    pathRegex: new RegExp(`^${PATH.LOGIN}$`),
    queryParamKeys: AUTH_QUERY_PARAM_KEYS,
  },
  // sign up
  {
    pathRegex: new RegExp(`^${PATH.SIGN_UP}$`),
    queryParamKeys: AUTH_QUERY_PARAM_KEYS,
  },
];

export {
  PRODUCT_QUERY_PARAM_KEYS,
  AUTH_QUERY_PARAM_KEYS,
  ROUTE_PERMITTED_QUERY_PARAM_KEYS,
};
