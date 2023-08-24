export const ROUTE_PARAMS = {
  PRODUCT_NAME: "productName",
};

export const PATH = {
  HOME: "",
  DUMMY: "dummy",
  LIST_PRODUCTS: "products",
  PRODUCT_DETAIL: `products/:${ROUTE_PARAMS.PRODUCT_NAME}`,
};
