import React, { memo, useState } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { MdFavoriteBorder, MdFavorite, MdStar, MdStarHalf, MdVisibility } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import logo from '../../assets/no-image.png'
import { addFavoriteBook } from '../../store/modules/books/actions';
import { IBookState } from '../../store/modules/books/types';

import './styles.scss';

interface BookCardServiceProps {
  book: IBookState
}

const BookCard: React.FC<BookCardServiceProps> = props => {
  const { book } = props;
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(book.isFavorite);

  const handleAddFavoriteBook = useCallback(() => {
    dispatch(addFavoriteBook(book));
    setIsFavorite(true);
  }, [dispatch, book]);

  const generateStars = useCallback((rate: number) => {
    const starsLength = Array.from({length: 5}, (v, k) => k + 1);
    if (rate) {
      const format = String(rate).split('.');
      const length = Number(format[0]);
      if (format.length > 1) {
        const list = Array.from({length}, (v, k) => k + 1)
        const rest = 5 - (list.length + 1);
        const restList = Array.from({length: rest}, (v, k) => k + 1)

        return (
          <>
            {
              list.map(item => (
                <MdStar key={item} color="#ffc107" />
              ))
            }
            <MdStarHalf color="#ffc107" />
            {
              rest > 0 &&
                restList.map(item => (
                  <MdStar key={item} color="#8c8c8c" />
                ))
            }
          </>
        )
      } else {
        const list = Array.from({length}, (v, k) => k + 1)
        const rest = 5 - list.length;
        const restList = Array.from({length: rest}, (v, k) => k + 1)
        return (
          <>
            {
              rest > 0 ? (
                <>
                  {
                    list.map(item => (
                      <MdStar key={item} color="#ffc107" />
                    ))
                  }
                  {
                    restList.map(item => (
                      <MdStar key={item} color="#8c8c8c" />
                    ))
                  }
                </>

              ) : (
                list.map(item => (
                  <MdStar key={item} color="#ffc107" />
                ))
              )
            }
          </>
        )
      }
    }
    return (
      starsLength.map(item => (
        <MdStar key={item} color="#8c8c8c" />
      ))
    )
  }, []);

  return (
    <Card className="book-card">
      <Card.Body>
      <div className="header-container">
        <img 
          src={book.volumeInfo.imageLinks?.thumbnail || logo} 
          alt="Logo" 
        />
        <div className="book-header-info">
          <Card.Title as="strong">{book.volumeInfo.title}</Card.Title>
          <p className="authors">{book.volumeInfo.authors?.join(', ') || 'Autor não informado'}</p>
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