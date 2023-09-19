import { API_FETCHING_STATE } from "@/constants";

export type TApisFetchingState =
  (typeof API_FETCHING_STATE)[keyof typeof API_FETCHING_STATE];
