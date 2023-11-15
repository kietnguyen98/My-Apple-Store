import { API_FETCHING_STATE } from "@/app/share/constants";

export type TApisFetchingState =
  (typeof API_FETCHING_STATE)[keyof typeof API_FETCHING_STATE];
