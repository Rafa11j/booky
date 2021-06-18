import { IBookState, ISearchBookState } from "./types";

export function searchBooks(searchBook: ISearchBookState, searchValue: string) {
  return {
    type: 'SEARCH_BOOKS',
    payload: {
      searchBook,
      searchValue,
    }
  }
}

export function nextPage(searchBook: ISearchBookState) {
  return {
    type: 'NEXT_PAGE',
    payload: {
      searchBook,
    }
  }
}

export function previousPage(searchBook: ISearchBookState) {
  return {
    type: 'PREVIOUS_PAGE',
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

export function startLoading() {
  return {
    type: 'START_LOADING',
  }
}

export function stopLoading() {
  return {
    type: 'STOP_LOADING',
  }
}
