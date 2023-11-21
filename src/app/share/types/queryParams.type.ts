import {
  PRODUCT_QUERY_PARAM_KEYS,
  AUTH_QUERY_PARAM_KEYS,
  LOVED_PRODUCT_QUERY_PARAM_KEYS,
} from "@/app/share/constants";
import { PATH } from "@/configs/routes";

export type TAuthQueryParamKeys =
  (typeof AUTH_QUERY_PARAM_KEYS)[keyof typeof AUTH_QUERY_PARAM_KEYS];

export type TProductQueryParamKeys =
  (typeof PRODUCT_QUERY_PARAM_KEYS)[keyof typeof PRODUCT_QUERY_PARAM_KEYS];

export type TLovedProductQueryParamKeys =
  (typeof LOVED_PRODUCT_QUERY_PARAM_KEYS)[keyof typeof LOVED_PRODUCT_QUERY_PARAM_KEYS];

export type TProductsQueryParams = Partial<
  Record<TProductQueryParamKeys, string | number>
>;

export type TLovedProductQueryParams = Partial<
  Record<TLovedProductQueryParamKeys, string | number>
>;

export type TUpdateQueryParamsProps = Partial<
  Record<TAuthQueryParamKeys | TProductQueryParamKeys, string | number>
>;

export type TQueryParamsToSubscribesOnPath = {
  [Key in keyof typeof PATH]: {
    PATH: (typeof PATH)[keyof typeof PATH];
    PATH_REGEX: RegExp;
    PERMITTED_QUERY_PARAMS: Array<{
      KEY: string;
      DEFAULT_VALUE: string;
    }>;
  };
};
