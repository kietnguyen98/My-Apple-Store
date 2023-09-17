import { PRODUCT_QUERY_PARAM_KEYS, AUTH_QUERY_PARAM_KEYS } from "@/constants";

export type TAuthQueryParamKeys =
  (typeof AUTH_QUERY_PARAM_KEYS)[keyof typeof AUTH_QUERY_PARAM_KEYS];

export type TProductQueryParamKeys =
  (typeof PRODUCT_QUERY_PARAM_KEYS)[keyof typeof PRODUCT_QUERY_PARAM_KEYS];

export type TProductsQueryParams = Partial<
  Record<TProductQueryParamKeys, string | number>
>;

export type TSetQueryParamsProps = {
  key: TProductQueryParamKeys | TAuthQueryParamKeys;
  value: string | number;
};

export type TQueryParamKeyForSubscribes =
  // product
  | typeof PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM
  | typeof PRODUCT_QUERY_PARAM_KEYS.CATEGORY
  | typeof PRODUCT_QUERY_PARAM_KEYS.START_PRICE
  | typeof PRODUCT_QUERY_PARAM_KEYS.END_PRICE
  | typeof PRODUCT_QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION
  | typeof PRODUCT_QUERY_PARAM_KEYS.PAGE
  | typeof PRODUCT_QUERY_PARAM_KEYS.OFFSET
  // auth
  | typeof AUTH_QUERY_PARAM_KEYS.REDIRECT_URL;
