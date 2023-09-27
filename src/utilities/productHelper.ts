import { TMemoryCapacity, TProduct } from "@/app/features/product/types";

export function getOriginalPrice(
  product: TProduct,
  currentMemoryCapacity: TMemoryCapacity | undefined
) {
  return product.price + (currentMemoryCapacity?.plusPrice || 0);
}

export function getSalePrice(
  product: TProduct,
  currentMemoryCapacity: TMemoryCapacity | undefined
) {
  return (
    (product.price * (100 - product.salePercentage)) / 100 +
    (currentMemoryCapacity?.plusPrice || 0)
  );
}
