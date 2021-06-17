import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BookCard from '../BookCard';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../store';
import { IBookState } from '../../store/modules/books/types';

export const BookList: React.FC = () => {
  const books = useSelector<IApplicationState, IBookState[]>(state => state.book.items);

  return (
    <Row>
      {
        books.map(book => (
          <Col xl={3} key={book.id} style={{ padding: 4 }}>
            <BookCard book={book} />
          </Col>
        ))
      }
    </Row>
  );
}
