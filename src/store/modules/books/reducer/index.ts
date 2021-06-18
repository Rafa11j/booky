import { Reducer } from 'redux';
import { IApplicationBooks, ISearchBookState } from '../types';

const favoritesBooksLocal = localStorage.getItem('myFavoriteBooks')

const INITIAL_STATE: IApplicationBooks = {
  searchBook: {
    kind: '',
    totalItems: 0,
    items: [],
  },
  favoritesBooks: favoritesBooksLocal ? JSON.parse(favoritesBooksLocal) : []
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
      state.searchBook = searchBook as ISearchBookState;

      return state;
    }
    case 'ADD_FAVORITE_BOOK': {
      const myFavoriteBooks = [...state.favoritesBooks, action.payload.book];

      localStorage.setItem('myFavoriteBooks', JSON.stringify(myFavoriteBooks));

      state.favoritesBooks = myFavoriteBooks;
      return state;
    }
    default:
      return state;
  }
}

