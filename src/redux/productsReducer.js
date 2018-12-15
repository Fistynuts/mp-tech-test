import { GET_PRODUCTS, GET_PRODUCTS_COMPLETED, GET_PRODUCT_DETAILS, GET_PRODUCT_DETAILS_COMPLETED } from './actions';

const initialState = {
  isLoading: false,
  productCollection: [],
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        isLoading: true,
        error: null
      }
    }
    case GET_PRODUCTS_COMPLETED: {
      return {
        ...state,
        productCollection: action.payload.products.Products,
        resultsCount: action.payload.products.NumberOfProducts,
        error: action.payload.error,
        isLoading: false
      }
    }
    case GET_PRODUCT_DETAILS: {
      return {
        ...state,
        isLoading: true,
        detailProduct: null,
        error: null
      }
    }
    case GET_PRODUCT_DETAILS_COMPLETED: {
      return {
        ...state,
        isLoading: false,
        detailProduct: action.payload.product,
        error: action.payload.error
      }
    }
    default: {
      return state;
    }
  }
}