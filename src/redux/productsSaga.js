import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_PRODUCTS, getProductsCompleted, getProductsErrored } from './actions';
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