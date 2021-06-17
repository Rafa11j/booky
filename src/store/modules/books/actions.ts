import { ISearchBookState } from "./types";

export function searchBooks(searchBook: ISearchBookState) {
  return {
    type: 'SEARCH_BOOKS',
    payload: {
      searchBook,
    }
  }
}
