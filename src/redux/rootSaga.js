import { all } from 'redux-saga/effects';
import { watchGetProducts } from './productsSaga';

export default function* rootSaga() {
  yield all([
    watchGetProducts()
  ]);
}