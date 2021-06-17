import { Reducer } from 'redux';
import { IBookState } from './types';

const INITIAL_STATE: IBookState[] = [];

export const favoritiesBooks: Reducer<IBookState[]> = () => {
  return INITIAL_STATE;  
}

