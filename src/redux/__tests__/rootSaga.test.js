import { all } from 'redux-saga/effects';
import { watchGetProducts, watchGetProductDetails } from '../productsSaga';
import rootSaga from '../rootSaga';

describe('rootSaga', () => {
  it('should yield with the correct sagas', () => {
    const generator = rootSaga();
    const first = generator.next();

    expect(first.done).toBeFalsy();
    expect(first.value).toEqual(all([
      watchGetProducts(),
      watchGetProductDetails()
    ]));

    const second = generator.next();

    expect(second.done).toBeTruthy();
  });
});