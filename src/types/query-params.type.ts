import { QUERY_PARAM_KEYS } from "@/constants";

export type TQueryParamKeys =
  (typeof QUERY_PARAM_KEYS)[keyof typeof QUERY_PARAM_KEYS];

export type TProductsQueryParams = Partial<
  Record<TQueryParamKeys, string | number>
>;

export type TSetQueryParamsProps = {
  key: TQueryParamKeys;
  value: string | number;
};

export type TQueryParamKeyForSubscribes =
  | typeof QUERY_PARAM_KEYS.SEARCH_TERM
  | typeof QUERY_PARAM_KEYS.CATEGORY
  | typeof QUERY_PARAM_KEYS.START_PRICE
  | typeof QUERY_PARAM_KEYS.END_PRICE
  | typeof QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION
  | typeof QUERY_PARAM_KEYS.PAGE
  | typeof QUERY_PARAM_KEYS.OFFSET;
