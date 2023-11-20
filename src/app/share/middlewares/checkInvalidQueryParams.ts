import { Params } from "@angular/router";

type TCheckInvalidQueryParamsProps = {
  currentQueryParams: Params;
  permittedQueryParams: Array<{
    KEY: string;
    DEFAULT_VALUE: string;
  }>;
};

export function checkInvalidQueryParams({
  currentQueryParams,
  permittedQueryParams,
}: TCheckInvalidQueryParamsProps) {
  let shouldReload = false;
  let validQueryParamsOnUrl: Params = {};

  for (let key in currentQueryParams) {
    let isKeyPermitted = false;
    permittedQueryParams.forEach(queryParam => {
      if (key === queryParam.KEY) {
        isKeyPermitted = true;
      }
    });
    if (!isKeyPermitted) {
      delete currentQueryParams[key];
      shouldReload = true;
    } else {
      validQueryParamsOnUrl[key] = currentQueryParams[key];
    }
  }

  return {
    shouldReload,
    validQueryParamsOnUrl,
  };
}
