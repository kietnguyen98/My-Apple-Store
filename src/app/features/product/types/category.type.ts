import { CATEGORY_VALUES } from "@/app/share/constants";

type TCategoryValue =
  | typeof CATEGORY_VALUES.IPHONE
  | typeof CATEGORY_VALUES.IPAD
  | typeof CATEGORY_VALUES.IWATCH;

type TCategory = {
  id: string;
  name: TCategoryValue;
};

type TCategories = Array<TCategory>;

export { TCategory, TCategories, TCategoryValue };
