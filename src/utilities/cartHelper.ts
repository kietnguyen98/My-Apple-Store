import { TCartItems } from "@/app/features/cart/types";

export function getTotalExactPrice(cartItems: TCartItems) {
  return cartItems.reduce(
    (prev, item) =>
      prev +
      (item.checked
        ? item.quantity *
          (item.product.price + (item.selectedMemory?.plusPrice || 0))
        : 0),
    0
  );
}
