import { getProductDetails, searchProducts } from '../products';

describe('Products API', () => {
  describe('getProductDetails', () => {

    const testProductId = "test123";
    const testResponse = {
      field: "value"
    };
    const testError = new Error('this is a test error');
    const testInvalidResponse = {
      error: "test error"
    };
    const testInvalidInit = {
      status: 404
    };

    it('should call the correct URL', async () => {

      fetch.mockResponseOnce(JSON.stringify(testResponse));

      await getProductDetails(testProductId);

      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual(`https://www.moonpig.com/uk/api/product/product/?mpn=${testProductId}`);
    });

    it('should handle a successful and ok call by returning the data', async () => {
      fetch.mockResponseOnce(JSON.stringify(testResponse));

      await expect(getProductDetails(testProductId)).resolves.toEqual(testResponse);
    });

    it('should handle a successful but not ok call by throwing an error', async () => {
      fetch.mockResponseOnce(JSON.stringify(testInvalidResponse), testInvalidInit);
      expect.assertions(1);

      await expect(getProductDetails(testProductId)).rejects.toBeInstanceOf(Error);
    });

    it('should handle an unsuccessful call by throwing the same error', async () => {
      fetch.mockRejectOnce(testError);
      expect.assertions(1);

      await expect(getProductDetails(testProductId)).rejects.toEqual(testError);
    });
  });
});