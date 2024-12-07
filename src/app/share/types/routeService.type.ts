import { PATH } from "@/app/share/configs";
import { TUpdateQueryParamsProps } from "./queryParams.type";

export type TNavigateWithUrlOnlyProps = {
  path: string | Array<string>;
  reload?: boolean;
};

export type TNavigateWithParamsProps = {
  path: (typeof PATH)[keyof typeof PATH];
  queryParams: TUpdateQueryParamsProps;
  replaceAll?: boolean;
};
