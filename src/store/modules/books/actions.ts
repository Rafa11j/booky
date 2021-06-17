import { IBookState } from "./types";

export function listFavoritiesBooks() {
  return {
    type: 'LIST_FAVORITIES_BOOKS'
  }
}

export function addBookToFavorities(book: IBookState) {
  return {
    type: 'ADD_BOOK_TO_FAVORITIES',
    payload: {
      book,
    }
  }
}