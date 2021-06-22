import React, { memo, useState } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { MdFavoriteBorder, MdFavorite, MdVisibility } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import logo from '../../assets/no-image.png'
import { addFavoriteBook } from '../../store/modules/books/actions';
import { IBookState } from '../../store/modules/books/types';

import './styles.scss';
import useRater from '../../hooks/useRater';

interface BookCardServiceProps {
  book: IBookState
}

const BookCard: React.FC<BookCardServiceProps> = props => {
  const { book } = props;
  const dispatch = useDispatch();
  const { generateStars } = useRater();
  const [isFavorite, setIsFavorite] = useState(book.isFavorite);

  const handleAddFavoriteBook = useCallback(() => {
    dispatch(addFavoriteBook(book));
    setIsFavorite(true);
  }, [dispatch, book]);

  return (
    <Card className="book-card">
      <Card.Body>
      <div className="header-container">
        <img 
          src={book.volumeInfo.imageLinks?.thumbnail || logo} 
          alt="Logo" 
        />
        <div className="book-header-info">
          <Card.Title as="strong" data-testid="book-title">
            {book.volumeInfo.title}
          </Card.Title>
          <p className="authors" data-testid="book-authors">{book.volumeInfo.authors?.join(', ') || 'Autor não informado'}</p>
          <div>
            {
              book.volumeInfo.averageRating ? 
                generateStars(book.volumeInfo.averageRating) : 
                <small>Sem nota</small>
            }
          </div>
        </div>
      </div>
        
        <div className="book-description">
          <p>
            {book.volumeInfo.description || 'Sem descrição'}
          </p>
        </div>
      </Card.Body>
      <Card.Footer className="book-footer">
        <Row>
          <Col>
            {
              isFavorite ? (
                <MdFavorite className="favorite-button isFavorite" />
              ) : (
                <MdFavoriteBorder className="favorite-button" onClick={handleAddFavoriteBook} />
              )
            }
          </Col>
          <Col>
            <Link to={`/book/${book.id}`}>
              <MdVisibility className="view-button" />
            </Link>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

export default memo(BookCard);