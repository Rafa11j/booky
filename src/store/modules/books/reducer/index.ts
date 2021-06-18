import { Reducer } from 'redux';
import { IApplicationBooks, ISearchBookState } from '../types';

const favoritesBooksLocal = localStorage.getItem('myFavoriteBooks')

const INITIAL_STATE: IApplicationBooks = {
  searchBook: {
    kind: '',
    totalItems: 0,
    items: [],
    page: 0,
  },
  favoritesBooks: favoritesBooksLocal ? JSON.parse(favoritesBooksLocal) : [],
  loading: false,
  searchValue: ''
};

export const application: Reducer<IApplicationBooks> = (
  state = INITIAL_STATE, 
  action
) => {  
  switch(action.type) {
    case 'SEARCH_BOOKS': {
      const searchBook = action.payload.searchBook as ISearchBookState;

      if (state.favoritesBooks.length > 0) {
        state.favoritesBooks.forEach(favorite => {
          const inFavorites = searchBook.items.some(book => book.id === favorite.id)

          if (inFavorites) {
            searchBook.items.forEach(book => {
              if (book.id === favorite.id) {
                book.isFavorite = true;
              }
            })
          }

        })
      }

      return {
        ...state,
        searchBook: {
          ...searchBook,
          page: 0,
        },
        searchValue: action.payload.searchValue,
        loading: false,
      };
    }
    case 'ADD_FAVORITE_BOOK': {
      const myFavoriteBooks = [...state.favoritesBooks, action.payload.book];

      localStorage.setItem('myFavoriteBooks', JSON.stringify(myFavoriteBooks));

      state.favoritesBooks = myFavoriteBooks;
      return {
        ...state,
        favoritesBooks: myFavoriteBooks,
      };
    }
    case 'START_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'STOP_LOADING': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'NEXT_PAGE': {
      const searchBook = action.payload.searchBook as ISearchBookState;

      if (state.favoritesBooks.length > 0) {
        state.favoritesBooks.forEach(favorite => {
          const inFavorites = searchBook.items.some(book => book.id === favorite.id)

          if (inFavorites) {
            searchBook.items.forEach(book => {
              if (book.id === favorite.id) {
                book.isFavorite = true;
              }
            })
          }

        })
      }

      return {
        ...state,
        searchBook: {
          ...searchBook,
          page: state.searchBook.page + 1,
        },
      };
    }
    case 'PREVIOUS_PAGE': {
      const searchBook = action.payload.searchBook as ISearchBookState;

      if (state.favoritesBooks.length > 0) {
        state.favoritesBooks.forEach(favorite => {
          const inFavorites = searchBook.items.some(book => book.id === favorite.id)

          if (inFavorites) {
            searchBook.items.forEach(book => {
              if (book.id === favorite.id) {
                book.isFavorite = true;
              }
            })
          }

        })
      }

      return {
        ...state,
        searchBook: {
          ...searchBook,
          page: state.searchBook.page - 1,
        },
      };
    }
    default:
      return state;
  }
}

