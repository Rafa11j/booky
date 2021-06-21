import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../store';
import { IBookState } from '../../store/modules/books/types';
import BookCard from '../BookCard';

import './styles.scss';

const FavoriteBookList: React.FC = () => {
  const favoriteBooks = useSelector<IApplicationState, IBookState[]>(state => state.application.favoritesBooks);

  return (
    <div className="favorite-book-list-container">
      <Row>
        {
          favoriteBooks.map(book => (
            <Col xl={3} key={book.id} style={{ padding: 4 }}>
              <BookCard book={{ ...book, isFavorite: true }} />
            </Col>
          ))
        }
      </Row>
    </div>
  );
}

export default FavoriteBookList;