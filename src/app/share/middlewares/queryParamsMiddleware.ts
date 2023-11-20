import { Params } from "@angular/router";
import { checkInvalidQueryParams } from "./checkInvalidQueryParams";
import { getQueryParamsForSubscribes } from "./getQueryParamsForSubscribes";
import { TNavigateWithUrlOnlyProps, TNavigateWithParamsProps } from "../types";

type queryParamsMiddleWareProps = {
  currentPathWithoutQueryParams: string;
  currentQueryParams: Params;
  permittedQueryParams: Array<{
    KEY: string;
    DEFAULT_VALUE: string;
  }>;
  navigateWithUrlOnly: (params: TNavigateWithUrlOnlyProps) => void;
  navigateWithQueryParams: (params: TNavigateWithParamsProps) => void;
};

export function queryParamsMiddleware({
  currentPathWithoutQueryParams,
  currentQueryParams,
  permittedQueryParams,
  navigateWithUrlOnly,
  navigateWithQueryParams,
}: queryParamsMiddleWareProps) {
  if (permittedQueryParams.length === 0)
    navigateWithUrlOnly({ path: currentPathWithoutQueryParams });

  const { shouldReload, validQueryParamsOnUrl } = checkInvalidQueryParams({
    currentQueryParams: currentQueryParams,
    permittedQueryParams: permittedQueryParams,
  });

  if (shouldReload) {
    navigateWithQueryParams({
      path: currentPathWithoutQueryParams,
      queryParams: validQueryParamsOnUrl,
      replaceAll: true,
    });
  }

  const { queryParamsForSubscribe } = getQueryParamsForSubscribes({
    validQueryParamsOnUrl: validQueryParamsOnUrl,
    permittedQueryParams: permittedQueryParams,
  });

  return { queryParamsForSubscribe };
}
