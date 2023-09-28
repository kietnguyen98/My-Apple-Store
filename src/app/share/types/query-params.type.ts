import { PRODUCT_QUERY_PARAM_KEYS, AUTH_QUERY_PARAM_KEYS } from "@/constants";

export type TAuthQueryParamKeys =
  (typeof AUTH_QUERY_PARAM_KEYS)[keyof typeof AUTH_QUERY_PARAM_KEYS];

export type TProductQueryParamKeys =
  (typeof PRODUCT_QUERY_PARAM_KEYS)[keyof typeof PRODUCT_QUERY_PARAM_KEYS];

export type TProductsQueryParams = Partial<
  Record<TProductQueryParamKeys, string | number>
>;

export type TUpdateQueryParamsProps = Partial<
  Record<TAuthQueryParamKeys | TProductQueryParamKeys, string | number>
>;
