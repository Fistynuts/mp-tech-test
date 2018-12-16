/* eslint-disable no-unused-vars */
import { combineReducers } from 'redux';
// import rootReducer from '../rootReducer';
import products from '../productsReducer';

describe('rootReducer', () => {

  const testReturnValue = { result: 'abc' };
  const mockCombineReducers = jest.fn(() => (testReturnValue));
  const mockProducts = {
    field: 'value'
  };
  let rootReducer;

  beforeAll(() => {
    jest.doMock('redux', () => ({
      combineReducers: mockCombineReducers
    }));
    jest.doMock('../productsReducer', () => mockProducts);
    // eslint-disable-next-line global-require
    rootReducer = require('../rootReducer');
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should call combineReducers with the correct value', () => {
    expect(mockCombineReducers).toHaveBeenCalledWith({ products: mockProducts });
  });

  it('should return the correct value', () => {
    expect(rootReducer).toEqual({ default: testReturnValue });
  });
});