export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_COMPLETED = 'GET_PRODUCTS_COMPLETED';
export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';
export const GET_PRODUCT_DETAILS_COMPLETED = 'GET_PRODUCT_DETAILS_COMPLETED';

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

export const getProductDetails = mpProductId => ({
  type: GET_PRODUCT_DETAILS,
  payload: {
    params: { 
      mpProductId 
    }
  }
});

export const getProductDetailsCompleted = product => ({
  type: GET_PRODUCT_DETAILS_COMPLETED,
  payload: {
    product,
  }
});

export const getProductDetailsErrored = error => ({
  type: GET_PRODUCT_DETAILS_COMPLETED, 
  payload: {
    error,
    product: null
  }
});