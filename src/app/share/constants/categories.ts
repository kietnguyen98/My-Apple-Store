const ALL = "all" as const;
const IPHONE = "iPhone" as const;
const IPAD = "iPad" as const;
const IWATCH = "iWatch" as const;

export const CATEGORY_VALUES = {
  ALL: ALL,
  IPHONE: IPHONE,
  IPAD: IPAD,
  IWATCH: IWATCH,
};

export const CATEGORY_OPTIONS = [
  { name: "All", value: CATEGORY_VALUES.ALL },
  { name: CATEGORY_VALUES.IPHONE, value: CATEGORY_VALUES.IPHONE },
  { name: CATEGORY_VALUES.IPAD, value: CATEGORY_VALUES.IPAD },
  { name: CATEGORY_VALUES.IWATCH, value: CATEGORY_VALUES.IWATCH },
];
