import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_CARDS, getCardsCompleted, getCardsErrored } from './actions';
import * as Api from '../api/cards';

function* getCardsSaga() {
  
  try {
    const response = yield call(Api.searchCards);
    yield put(getCardsCompleted(response));
  } 
  catch (e) {
    console.error('error in getCardsSaga');
    yield put(getCardsErrored(e));
  }
}

export function* watchGetCards() {
  yield takeLatest(GET_CARDS, getCardsSaga);
}