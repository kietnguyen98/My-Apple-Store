import { TOffsetOption } from "@/app/share/types";

export const OFFSET_OPTIONS: Array<TOffsetOption> = [
  {
    name: "5 elements per page",
    value: 5,
  },
  {
    name: "10 elements per page",
    value: 10,
  },
  {
    name: "20 elements per page",
    value: 20,
  },
];

export const DEFAULT_OFFSET_OPTION = OFFSET_OPTIONS[0];
