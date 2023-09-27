import { Params } from "@angular/router";
import { AUTH_QUERY_PARAM_KEYS, PRODUCT_QUERY_PARAM_KEYS } from "@/constants";
import { TQueryParamKeyForSubscribes } from "@/app/share/types";

const QUERY_PARAMS_ORDERED_ARRAY: Array<TQueryParamKeyForSubscribes> = [
  // product
  PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM,
  PRODUCT_QUERY_PARAM_KEYS.STATUS,
  PRODUCT_QUERY_PARAM_KEYS.CATEGORY,
  PRODUCT_QUERY_PARAM_KEYS.START_PRICE,
  PRODUCT_QUERY_PARAM_KEYS.END_PRICE,
  PRODUCT_QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION,
  PRODUCT_QUERY_PARAM_KEYS.PAGE,
  PRODUCT_QUERY_PARAM_KEYS.OFFSET,
  // auth
  AUTH_QUERY_PARAM_KEYS.REDIRECT_URL,
];

export function encodeUrl(dirtyUrl: string) {
  return dirtyUrl
    .replaceAll("%20", " ")
    .replaceAll("%28", "(")
    .replaceAll("%29", ")");
}

export function decodeUrl(cleanUrl: string) {
  return cleanUrl
    .replaceAll(" ", "%20")
    .replaceAll("(", "%28")
    .replaceAll(")", "%29");
}

export function getCleanSpecificRoutePath(
  currentUrl: string,
  isHaveQueryParams: boolean = false
) {
  return isHaveQueryParams
    ? encodeUrl(currentUrl).split("?")[0].replace("/", "")
    : encodeUrl(currentUrl).replace("/", "");
}

export function sortQueryParamsInOrder(currentQueryParams: Params) {
  let sortedQueryParams: Params = {};

  Object.keys(currentQueryParams)
    .sort(
      (a, b) =>
        QUERY_PARAMS_ORDERED_ARRAY.indexOf(a as TQueryParamKeyForSubscribes) -
        QUERY_PARAMS_ORDERED_ARRAY.indexOf(b as TQueryParamKeyForSubscribes)
    )
    .forEach(key => (sortedQueryParams[key] = currentQueryParams[key]));

  return sortedQueryParams;
}
