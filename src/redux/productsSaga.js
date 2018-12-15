import { put, takeLatest, call } from 'redux-saga/effects';
import { 
  GET_PRODUCTS, 
  getProductsCompleted, 
  getProductsErrored, 
  GET_PRODUCT_DETAILS, 
  getProductDetailsCompleted, 
  getProductDetailsErrored } from './actions';
import * as Api from '../api/products';

function* getProductsSaga() {
  
  try {
    const response = yield call(Api.searchProducts);
    yield put(getProductsCompleted(response));
  } 
  catch (e) {
    console.error('error in getProductsSaga');
    yield put(getProductsErrored(e));
  }
}

export function* watchGetProducts() {
  yield takeLatest(GET_PRODUCTS, getProductsSaga);
}

function* getProductDetailsSaga(action) {
  
  try {
    const response = yield call(Api.getProductDetails, action.payload.params.mpProductId);
    yield put(getProductDetailsCompleted(response));
  } 
  catch (e) {
    console.error('error in getProductDetailsSaga');
    yield put(getProductDetailsErrored(e));
  }
}

export function* watchGetProductDetails() {
  yield takeLatest(GET_PRODUCT_DETAILS, getProductDetailsSaga);
}