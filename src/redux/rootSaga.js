import { all } from 'redux-saga/effects';
import { watchGetCards } from './cardsSaga';

export default function* rootSaga() {
  yield all([
    watchGetCards()
  ]);
}