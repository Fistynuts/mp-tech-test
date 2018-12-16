import * as Actions from '../actions';

describe('actions', () => {
  
  const testProductId = 'test123';
  const testProduct = {
    field: 'value'
  };
  const testError = new Error('test error');

  it('should provide a getProducts function that returns the correct action', () => {
    const result = Actions.getProducts();

    expect(result.type).toEqual(Actions.GET_PRODUCTS);
  });

  it('should provide a getProductsCompleted function that returns the correct action', () => {
    const result = Actions.getProductsCompleted();

    expect(result.type).toEqual(Actions.GET_PRODUCTS_COMPLETED);
  });

  it('should provide a getProductsErrored function that returns the correct action', () => {
    const result = Actions.getProductsErrored(testError);

    expect(result.type).toEqual(Actions.GET_PRODUCTS_COMPLETED);
    expect(result.payload.error).toEqual(testError);
  });

  it('should provide a getProductDetails function that returns the correct action', () => {
    const result = Actions.getProductDetails(testProductId);

    expect(result.type).toEqual(Actions.GET_PRODUCT_DETAILS);
    expect(result.payload.params.mpProductId).toEqual(testProductId);
  });

  it('should provide a getProductDetailsCompleted function that returns the correct action', () => {
    const result = Actions.getProductDetailsCompleted(testProduct);

    expect(result.type).toEqual(Actions.GET_PRODUCT_DETAILS_COMPLETED);
    expect(result.payload.product).toEqual(testProduct);
  });

  it('should provide a getProductDetailsErrored function that returns the correct action', () => {
    const result = Actions.getProductDetailsErrored(testError);

    expect(result.type).toEqual(Actions.GET_PRODUCT_DETAILS_COMPLETED);
    expect(result.payload.error).toEqual(testError);
  });
});