export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_STARTED = "GET_PRODUCTS_STARTED";
export const GET_PRODUCTS_COMPLETED = "GET_PRODUCTS_COMPLETED";

export const getProducts = () => ({
  type: GET_PRODUCTS
});

export const getProductsCompleted = products => ({
  type: GET_PRODUCTS_COMPLETED,
  payload: {
    products
  }
});

export const getProductsErrored = error => ({
  type: GET_PRODUCTS_COMPLETED,
  payload: {
    error,
    products: []
  }
});
