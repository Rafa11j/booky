import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ISearchBookState } from './modules/books/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export interface IApplicationState {
  book: ISearchBookState
}

const store = createStore(rootReducer, applyMiddleware(
  ...middlewares
));

sagaMiddleware.run(rootSaga);

export default store;