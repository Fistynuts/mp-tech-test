import { put, call } from 'redux-saga/effects';
import * as ProductsSaga from '../productsSaga';
import * as Api from '../../api/products';
import { 
  getProductsCompleted, 
  getProductsErrored, 
  getProductDetailsCompleted, 
  getProductDetailsErrored 
} from '../actions';

describe('productsSaga', () => {
  describe('getProductsSaga', () => {
    const validResult = {
      field: 'value'
    };
    const invalidResult = new Error('test error');

    it('should yield the correct values if the API call is successful', () => {
      const generator = ProductsSaga.getProductsSaga();
      const first = generator.next();

      expect(first.done).toBeFalsy();
      expect(first.value).toEqual(call(Api.searchProducts));

      const second = generator.next(validResult);

      expect(second.done).toBeFalsy();
      expect(second.value).toEqual(put(getProductsCompleted(validResult)));

      const third = generator.next();
      expect(third.done).toBeTruthy();
    });

    it('should yield the correct values if the API call is unsuccessful', () => {
      const generator = ProductsSaga.getProductsSaga();
      const first = generator.next();

      expect(first.done).toBeFalsy();
      expect(first.value).toEqual(call(Api.searchProducts));

      const second = generator.throw(invalidResult);

      expect(second.done).toBeFalsy();
      expect(second.value).toEqual(put(getProductsErrored(invalidResult)));

      const third = generator.next();
      expect(third.done).toBeTruthy();
    });
  });

  describe('getProductDetailsSaga', () => {
    const testProductId = 'abc123';
    const testAction = {
      payload: {
        params: {
          mpProductId: testProductId
        }
      }
    };
    const validResult = {
      field: 'value'
    };
    const invalidResult = new Error('test error');

    it('should yield the correct values if the API call is successful', () => {
      const generator = ProductsSaga.getProductDetailsSaga(testAction);
      const first = generator.next();

      expect(first.done).toBeFalsy();
      expect(first.value).toEqual(call(Api.getProductDetails, testProductId));

      const second = generator.next(validResult);

      expect(second.done).toBeFalsy();
      expect(second.value).toEqual(put(getProductDetailsCompleted(validResult)));

      const third = generator.next();
      expect(third.done).toBeTruthy();
    });

    it('should yield the correct values if the API call is unsuccessful', () => {
      const generator = ProductsSaga.getProductDetailsSaga(testAction);
      const first = generator.next();

      expect(first.done).toBeFalsy();
      expect(first.value).toEqual(call(Api.getProductDetails, testProductId));

      const second = generator.throw(invalidResult);

      expect(second.done).toBeFalsy();
      expect(second.value).toEqual(put(getProductDetailsErrored(invalidResult)));

      const third = generator.next();
      expect(third.done).toBeTruthy();
    });
  });
});