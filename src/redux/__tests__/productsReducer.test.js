import productsReducer from '../productsReducer';
import { 
  GET_PRODUCTS, GET_PRODUCTS_COMPLETED, GET_PRODUCT_DETAILS, GET_PRODUCT_DETAILS_COMPLETED 
} from '../actions';

describe('productsReducer', () => {
  const nullAction = {
    type: ''
  };

  it('should set up the correct default state', () => {
    const state = productsReducer(undefined, nullAction);

    expect(state).toEqual({
      isLoading: false,
      error: null,
      productCollection: []
    });
  });

  it('should, in response to a GET_PRODUCTS action, set isLoading to true and error to null', () => {
    const oldState = {
      isLoading: false,
      error: {}
    };
    const action = {
      type: GET_PRODUCTS
    };

    const state = productsReducer(oldState, action);

    expect(state.isLoading).toEqual(true);
    expect(state.error).toBeNull();
  });

  it('should, in response to a successful GET_PRODUCTS_COMPLETED action, set isLoading to false and productCollection to the returned collection', () => {
    const oldState = {
      isLoading: true,
      productCollection: null
    };
    const testProducts = [
      {
        field: 'value'
      }
    ];
    const action = {
      type: GET_PRODUCTS_COMPLETED,
      payload: {
        products: {
          Products: testProducts
        }
      }
    };

    const state = productsReducer(oldState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.productCollection).toEqual(testProducts);
  });

  it('should, in response to an unsuccessful GET_PRODUCTS_COMPLETED action, set isLoading to false and error to the error received', () => {
    const oldState = {
      isLoading: false,
      error: null
    };
    const testError = new Error('test error');
    const action = {
      type: GET_PRODUCTS_COMPLETED,
      payload: {
        error: testError,
        products: {
          Products: null
        }
      }
    };

    const state = productsReducer(oldState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(testError);
  });

  it('should, in response to a GET_PRODUCT_DETAILS action, set isLoading to true and error to null', () => {
    const oldState = {
      isLoading: false,
      detailProduct: {},
      error: {}
    };
    const action = {
      type: GET_PRODUCT_DETAILS
    };

    const state = productsReducer(oldState, action);

    expect(state.isLoading).toEqual(true);
    expect(state.detailProduct).toBeNull();
    expect(state.error).toBeNull();
  });

  it('should, in response to a successful GET_PRODUCT_DETAILS_COMPLETED action, set isLoading to false and productCollection to the returned collection', () => {
    const oldState = {
      isLoading: true,
      detailProduct: null
    };
    const testProduct = {
      field: 'value'
    };
    const action = {
      type: GET_PRODUCT_DETAILS_COMPLETED,
      payload: {
        product: testProduct
      }
    };

    const state = productsReducer(oldState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.detailProduct).toEqual(testProduct);
  });

  it('should, in response to an unsuccessful GET_PRODUCT_DETAILS_COMPLETED action, set isLoading to false and error to the error received', () => {
    const oldState = {
      isLoading: false,
      error: null
    };
    const testError = new Error('test error');
    const action = {
      type: GET_PRODUCT_DETAILS_COMPLETED,
      payload: {
        error: testError,
        product: null
      }
    };

    const state = productsReducer(oldState, action);

    expect(state.isLoading).toEqual(false);
    expect(state.error).toEqual(testError);
  });

});