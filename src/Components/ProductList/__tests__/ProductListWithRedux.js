import { mapDispatchToProps, mapStateToProps } from '../ProductListWithRedux';

describe('ProductListWithRedux', () => {
  describe('mapStateToProps', () => {

    it('should map the correct state members to props', () => {
      const state = {
        products: {
          isLoading: true,
          error: "test error",
          productCollection: [
            {
              field: "value"
            }
          ]
        }
      };

      const props = mapStateToProps(state);

      expect(props).toEqual({
        productCollection: state.products.productCollection,
        isLoading: state.products.isLoading,
        error: state.products.error
      });
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = jest.fn();

    afterEach(() => {
      dispatch.mockReset();
    });

    it('should add a getProducts member to the props', () => {
      const props = mapDispatchToProps(dispatch);

      expect(props).toHaveProperty('getProducts');
    });

    it('should, when called, dispatch the getProducts action', () => {
      const props = mapDispatchToProps(dispatch);

      props.getProducts();

      expect(dispatch).toHaveBeenCalledWith({
        type: "GET_PRODUCTS"
      });
    });
  });
});