import { GET_PRODUCTS, GET_PRODUCTS_COMPLETED } from './actions';

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
    default: {
      return state;
    }
  }
}