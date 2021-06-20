import React, { useState, useCallback, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useNotification } from '../../hooks/useNotification';
import { api } from '../../services/api';
import dayjs from 'dayjs';
import { IBookState } from '../../store/modules/books/types';

import logo from '../../assets/no-image.png'

import './styles.scss';
import { MdChevronLeft, MdStar, MdStarHalf } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader';

interface IParams {
  id: string;
}

export const BookDetail: React.FC = () => {
  const { id } = useParams<IParams>();
  const { addNotification } = useNotification();
  const [book, setBook] = useState<IBookState>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadBookDetail() {
      try {
        setLoading(true);
        const response = await api.get(`/volumes/${id}`);
        setBook(response.data);
      } catch {
        addNotification({
          type: 'danger',
          title: 'Erro!',
          message: 'Falha ao buscar livro!'
        });
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadBookDetail();
    }

  }, [id, addNotification]);

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
    <div className="book-detail-container">
      <div className="page-header">
        <h3>Detalhe do livro:</h3>
        <Link to="/">
          <MdChevronLeft />
          <span>voltar</span>
        </Link>
      </div>
      <Card className="book-detail-card">
        {
          loading ? (
            <Loader />
          ) : (
            <Card.Body>
              <div className="header-container">
                <Row>
                  <Col xl={4}>
                    <img 
                      src={book?.volumeInfo.imageLinks?.small || logo} 
                      alt="Logo" 
                    />
                  </Col>
                  <Col>
                    <div className="book-header-info">
                      <Card.Title as="h1">{book?.volumeInfo.title}</Card.Title>
                      <p className="authors">
                        Autores: {book?.volumeInfo.authors?.join(', ') || 'Autor não informado'}
                      </p>
                      <div className="book-averageRating">
                        <span>Nota: </span>
                          {
                            book?.volumeInfo.averageRating ? 
                              generateStars(book?.volumeInfo.averageRating) : 
                              <small>Sem nota</small>
                          }
                      </div>
                      <p className="authors">
                        Editora: {book?.volumeInfo.publisher || 'Editora não informado'}
                      </p>
                      <p className="authors">
                        Data da publicação: {dayjs(book?.volumeInfo.publishedDate).format('DD/MM/YYYY')}
                      </p>
                      <p className="authors">
                        Categorias: {book?.volumeInfo.categories?.join(', ') || 'Categoria não informada'}
                      </p>
                    </div>
                  </Col>
                </Row>
                
              </div>
                
              <div className="book-description">
                <span>Descrição: </span>
                <p>
                  {book?.volumeInfo.description || 'Sem descrição'}
                </p>
              </div>
            </Card.Body>
          )
        }
        
      </Card>
    </div>
  );
}
