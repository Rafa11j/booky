import { IBookState, ISearchBookState } from "./types";

export function searchBooks(searchBook: ISearchBookState) {
  return {
    type: 'SEARCH_BOOKS',
    payload: {
      searchBook,
    }
  }
}

export function addFavoriteBook(book: IBookState) {
  return {
    type: 'ADD_FAVORITE_BOOK',
    payload: {
      book,
    }
  }
}
