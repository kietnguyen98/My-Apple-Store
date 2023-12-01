import { TUser } from "../../auth/types";
import { TCartItems } from "./cart-item.type";

export type TCart = {
  user: TUser;
  cart: TCartItems;
};

export type TCarts = Array<TCart>;
