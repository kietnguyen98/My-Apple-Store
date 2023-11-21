import { TUser } from "../../auth/types";
import { TProduct } from "../../product/types";

export type TLovedProduct = {
  id: string;
  user: TUser;
  product: TProduct;
  createAt: string;
  updateAt: string;
};

export type TLovedProducts = Array<TLovedProduct>;
