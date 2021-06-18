import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import BookCard from '../BookCard';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../store';
import { IApplicationBooks, IBookState } from '../../store/modules/books/types';
import { useEffect } from 'react';

import './styles.scss';

export const BookList: React.FC = () => {
  const books = useSelector<IApplicationState, IBookState[]>(state => 
    state.application.searchBook.items
  );
  const app = useSelector<IApplicationState, IApplicationBooks>(state => 
    state.application
  );

  useEffect(() => {
    console.log('books',books)
    console.log('app', app)
  }, [app, books]);

  return (
    <Row>
      {
        app.loading ? (
          <div className="book-loader-container">
            <Spinner animation="border" variant="info" className="book-loader" />
          </div>
        ) : (
          books.map(book => (
            <Col xl={3} key={book.id} style={{ padding: 4 }}>
              <BookCard book={book} />
            </Col>
          ))
        )
      }
    </Row>
  );
}
