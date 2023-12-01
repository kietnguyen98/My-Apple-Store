import { PATH } from "@/app/share/configs";
import { CATEGORY_VALUES, PAGINATION, PRICES } from ".";
import { TQueryParamsToSubscribesOnPath } from "../types";

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

export const LOVED_PRODUCT_QUERY_PARAM_KEYS = {
  PAGE: "page",
  OFFSET: "offset",
  CATEGORY: "category",
};

export const QUERY_PARAMS_TO_SUBSCRIBES_ON_PATH: TQueryParamsToSubscribesOnPath =
  {
    HOME: {
      PATH: PATH.HOME,
      PATH_REGEX: new RegExp(`^${PATH.HOME}$`),
      PERMITTED_QUERY_PARAMS: [],
    },
    PRODUCTS: {
      PATH: PATH.PRODUCTS,
      PATH_REGEX: new RegExp(`^${PATH.PRODUCTS}$`),
      PERMITTED_QUERY_PARAMS: [
        {
          KEY: PRODUCT_QUERY_PARAM_KEYS.SEARCH_TERM,
          DEFAULT_VALUE: "",
        },
        {
          KEY: PRODUCT_QUERY_PARAM_KEYS.CATEGORY,
          DEFAULT_VALUE: CATEGORY_VALUES.ALL,
        },
        {
          KEY: PRODUCT_QUERY_PARAM_KEYS.STATUS,
          DEFAULT_VALUE: "",
        },
        {
          KEY: PRODUCT_QUERY_PARAM_KEYS.START_PRICE,
          DEFAULT_VALUE: PRICES.DEFAULT_FILTER_START_PRICE.toString(),
        },
        {
          KEY: PRODUCT_QUERY_PARAM_KEYS.END_PRICE,
          DEFAULT_VALUE: PRICES.DEFAULT_FILTER_END_PRICE.toString(),
        },
        {
          KEY: PRODUCT_QUERY_PARAM_KEYS.SORT_PRICE_DIRECTION,
          DEFAULT_VALUE: PRICES.DEFAULT_SORT_PRICE_DIRECTION_VALUE.toString(),
        },
        {
          KEY: PRODUCT_QUERY_PARAM_KEYS.PAGE,
          DEFAULT_VALUE: "1",
        },
        {
          KEY: PRODUCT_QUERY_PARAM_KEYS.OFFSET,
          DEFAULT_VALUE: PAGINATION.DEFAULT_OFFSET_OPTION.value.toString(),
        },
      ],
    },
    PRODUCT_DETAIL: {
      PATH: PATH.PRODUCT_DETAIL,
      PATH_REGEX: new RegExp(`^${PATH.PRODUCTS}/[a-zA-Z0-9\\s\)\(]+$`),
      PERMITTED_QUERY_PARAMS: [],
    },
    LOGIN: {
      PATH: PATH.LOGIN,
      PATH_REGEX: new RegExp(`^${PATH.LOGIN}$`),
      PERMITTED_QUERY_PARAMS: [
        {
          KEY: AUTH_QUERY_PARAM_KEYS.REDIRECT_URL,
          DEFAULT_VALUE: "",
        },
      ],
    },
    SIGN_UP: {
      PATH: PATH.SIGN_UP,
      PATH_REGEX: new RegExp(`^${PATH.SIGN_UP}$`),
      PERMITTED_QUERY_PARAMS: [
        {
          KEY: AUTH_QUERY_PARAM_KEYS.REDIRECT_URL,
          DEFAULT_VALUE: "",
        },
      ],
    },
    USER: {
      PATH: PATH.USER,
      PATH_REGEX: new RegExp(`^${PATH.USER}$`),
      PERMITTED_QUERY_PARAMS: [],
    },
    PROFILE: {
      PATH: `${PATH.USER}/${PATH.PROFILE}`,
      PATH_REGEX: new RegExp(`^${PATH.USER}/${PATH.PROFILE}$`),
      PERMITTED_QUERY_PARAMS: [],
    },
    PURCHASES: {
      PATH: `${PATH.USER}/${PATH.PURCHASES}`,
      PATH_REGEX: new RegExp(`^${PATH.USER}/${PATH.PURCHASES}$`),
      PERMITTED_QUERY_PARAMS: [],
    },
    LOVED_PRODUCTS: {
      PATH: `${PATH.USER}/${PATH.LOVED_PRODUCTS}`,
      PATH_REGEX: new RegExp(`^${PATH.USER}/${PATH.LOVED_PRODUCTS}$`),
      PERMITTED_QUERY_PARAMS: [
        { KEY: LOVED_PRODUCT_QUERY_PARAM_KEYS.PAGE, DEFAULT_VALUE: "1" },
        {
          KEY: LOVED_PRODUCT_QUERY_PARAM_KEYS.OFFSET,
          DEFAULT_VALUE: PAGINATION.DEFAULT_OFFSET_OPTION.value.toString(),
        },
        {
          KEY: LOVED_PRODUCT_QUERY_PARAM_KEYS.CATEGORY,
          DEFAULT_VALUE: CATEGORY_VALUES.ALL,
        },
      ],
    },
    PAYMENT: {
      PATH: PATH.PAYMENT,
      PATH_REGEX: new RegExp(`^${PATH.PAYMENT}$`),
      PERMITTED_QUERY_PARAMS: [],
    },
    DUMMY: {
      PATH: PATH.DUMMY,
      PATH_REGEX: new RegExp(`^${PATH.DUMMY}$`),
      PERMITTED_QUERY_PARAMS: [],
    },
  };
