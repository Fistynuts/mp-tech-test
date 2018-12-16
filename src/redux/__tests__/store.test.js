/* eslint-disable no-unused-vars */
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../rootReducer';
import rootSaga from '../rootSaga';

describe('Store', () => {

  let store;
  const mockRun = jest.fn();
  const mockCreateSaga = jest.fn(() => ({
    run: mockRun
  }));
  const mockCreateStore = jest.fn();
  const mockApplyMiddleware = jest.fn();
  const mockRootReducer = {};
  const mockRootSaga = {};
  const mockComposeWithDevTools = jest.fn();

  beforeAll(() => {
    // Mock all external dependencies
    jest.doMock('redux-saga', () => mockCreateSaga);
    jest.doMock('redux', () => ({
      createStore: mockCreateStore,
      applyMiddleware: mockApplyMiddleware
    }));
    jest.doMock('redux-devtools-extension', () => ({
      composeWithDevTools: mockComposeWithDevTools
    }));
    jest.doMock('../rootReducer', () => mockRootReducer);
    jest.doMock('../rootSaga', () => mockRootSaga);
    // eslint-disable-next-line global-require
    store = require('../store');
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should return a store object', () => {
    expect(store).toBeDefined();
  });

  it('should call createSagaMiddleware', () => {
    expect(mockCreateSaga).toHaveBeenCalledTimes(1);
  });

  it('should call createSagaMiddleware.run with the mock root saga', () => {
    expect(mockRun).toHaveBeenCalledWith(mockRootSaga);
  });

  it('should call createStore', () => {
    expect(mockCreateStore).toHaveBeenCalledTimes(1);
  });

  it('should call applyMiddleware', () => {
    expect(mockApplyMiddleware).toHaveBeenCalledTimes(1);
  });

  it('should call composeWithDevTools', () => {
    expect(mockComposeWithDevTools).toHaveBeenCalledTimes(1);
  });
});