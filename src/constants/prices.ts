export const DEFAULT_FILTER_START_PRICE = 100 as const;
export const DEFAULT_FILTER_END_PRICE = 2000 as const;

export const SORT_FROM_LOWEST_TO_HIGHEST = {
  name: "From lowest to highest",
  value: -1,
} as const;

export const SORT_FROM_HIGHEST_TO_LOWEST = {
  name: "From highest to lowest",
  value: 1,
} as const;

export const SORT_OPTIONS = [
  SORT_FROM_LOWEST_TO_HIGHEST,
  SORT_FROM_HIGHEST_TO_LOWEST,
] as const;
