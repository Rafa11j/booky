import { Reducer } from 'redux';
import { ISearchBookState } from './types';

const INITIAL_STATE: ISearchBookState = {
  kind: '',
  totalItems: 0,
  items: [],
};

export const book: Reducer<ISearchBookState> = (
  state = INITIAL_STATE, 
  action
) => {  
  switch(action.type) {
    case 'SEARCH_BOOKS': {

      const { searchBook } = action.payload;

      state = searchBook as ISearchBookState;

      return state;
    }
    default:
      return state;
  }
}

