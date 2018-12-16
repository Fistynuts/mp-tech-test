import { mapDispatchToProps, mapStateToProps } from '../ProductDetailsWithRedux';

describe('ProductDetailsWithRedux', () => {
  describe('mapStateToProps', () => {

    it('should map the correct state members to props', () => {
      const state = {
        products: {
          isLoading: true,
          error: 'test error',
          detailProduct: {
            field: 'value'
          }
        }
      };

      const props = mapStateToProps(state);

      expect(props).toEqual({
        detailProduct: state.products.detailProduct,
        isLoading: state.products.isLoading,
        error: state.products.error
      });
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const testProductId = 'test456';

    afterEach(() => {
      dispatch.mockReset();
    });

    it('should add a getProductDetails member to the props', () => {
      const props = mapDispatchToProps(dispatch);

      expect(props).toHaveProperty('getProductDetails');
    });

    it('should, when called, dispatch the getProductDetails action with the correct product ID', () => {
      const props = mapDispatchToProps(dispatch);

      props.getProductDetails(testProductId);

      expect(dispatch).toHaveBeenCalledWith({
        payload: {
          params: {
            mpProductId: 'test456'
          }
        }, 
        type: 'GET_PRODUCT_DETAILS'
      });
    });
  });
});