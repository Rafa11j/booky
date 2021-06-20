import { DataEntry } from "react-minimal-pie-chart/types/commonTypes";
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

export function filterBooksByCategory(category: string) {
  return {
    type: 'FILTER_BOOKS_BY_CATEGORY',
    payload: {
      category
    }
  }
}

export function addCategories(categories: DataEntry[]) {
  return {
    type: 'ADD_CATEGORIES',
    payload: {
      categories,
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
