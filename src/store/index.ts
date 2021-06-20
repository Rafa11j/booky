import { createStore } from 'redux';
import { IApplicationBooks } from './modules/books/types';
import rootReducer from './modules/rootReducer';
export interface IApplicationState {
  application: IApplicationBooks;
}

const store = createStore(rootReducer);

export default store;