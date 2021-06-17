import { all } from 'redux-saga/effects';

import book from './books/sagas';

export default function* rootSaga(): any {
  return yield all([
    book,
  ]);
}