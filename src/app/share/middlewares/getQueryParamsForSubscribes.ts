import { Params } from "@angular/router";

type TGetQueryParamsForSubscribesPops = {
  validQueryParamsOnUrl: Params;
  permittedQueryParams: Array<{
    KEY: string;
    DEFAULT_VALUE: string;
  }>;
};

export function getQueryParamsForSubscribes({
  validQueryParamsOnUrl,
  permittedQueryParams,
}: TGetQueryParamsForSubscribesPops) {
  let queryParamsForSubscribe: Params = {};
  permittedQueryParams.forEach(queryParam => {
    queryParamsForSubscribe[queryParam.KEY] = queryParam.DEFAULT_VALUE;
  });

  for (let key in validQueryParamsOnUrl) {
    queryParamsForSubscribe[key] = validQueryParamsOnUrl[key];
  }

  return {
    queryParamsForSubscribe,
  };
}
