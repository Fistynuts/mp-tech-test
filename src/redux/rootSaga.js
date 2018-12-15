import { all } from 'redux-saga/effects';
import { watchGetProducts, watchGetProductDetails } from './productsSaga';

export default function* rootSaga() {
  yield all([
    watchGetProducts(),
    watchGetProductDetails()
  ]);
}