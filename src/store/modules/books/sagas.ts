import { all, takeLatest } from 'redux-saga/effects';
import { searchBooks } from './actions';

type SearchBooksTypeRequest = ReturnType<typeof searchBooks>

function onSearchBooks({ payload }: SearchBooksTypeRequest) {
  console.log('Pesquisando por: ', payload);

}

export default all([
  takeLatest('SEARCH_BOOKS', onSearchBooks)
]);