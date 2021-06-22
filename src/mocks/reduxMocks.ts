import { IApplicationState } from "../store";
import { booksMocks } from "./bookMocks";

export const reduxApplicationMock: IApplicationState = {
  application: {
    categories: [
      {
        color: '#ff9000',
        value: 5,
        title: 'Comédia'
      },
      {
        color: '#ff0000',
        value: 5,
        title: 'Drama'
      },
    ],
    favoritesBooks: [],
    loading: false,
    searchBook: {
      items: booksMocks,
      kind: 'kind#book',
      page: 0,
      totalItems: 1
    },
    searchValue: 'Harry potter',
  }
}