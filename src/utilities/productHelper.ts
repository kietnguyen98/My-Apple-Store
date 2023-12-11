import {
  TMemoryCapacity,
  TProduct,
  TProducts,
} from "@/app/features/product/types";

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

export function getExactPrice(
  product: TProduct,
  currentMemoryCapacity: TMemoryCapacity | undefined
) {
  if (product.salePercentage > 0) {
    return getSalePrice(product, currentMemoryCapacity);
  } else {
    return getOriginalPrice(product, currentMemoryCapacity);
  }
}
