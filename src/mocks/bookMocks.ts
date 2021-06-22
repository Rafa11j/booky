import { IBookState } from "../store/modules/books/types";

export const booksMocks: IBookState[] = [
  {
    id: '123123',
    etag: 'etag',
    kind: 'kind#1',
    selfLink: 'selfLink',
    isFavorite: true,
    volumeInfo: {
      authors: ['Autor 1', 'Autor 2'],
      averageRating: 5,
      categories: ['Categoria 1'],
      description: 'Descrição',
      industryIdentifiers: [
        {
          identifier: 'identifier#1',
          type: 'BOOK'
        }
      ],
      language: 'pt_BR',
      pageCount: 300,
      printType: 'Test',
      publishedDate: '2021-06-21',
      publisher: 'Editora X',
      ratingsCount: 10,
      readingModes: {
        image: true,
        text: true
      },
      title: 'Título do livro teste',
      imageLinks: {
        smallThumbnail: 'link da imagem small',
        thumbnail: 'link da imagem',
        small: 'link da imagem',
      }
    }
  }
];
