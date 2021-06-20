import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BookCard from '../BookCard';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../store';
import { IApplicationBooks, IBookState } from '../../store/modules/books/types';
import { useEffect } from 'react';
import groupBy from 'lodash/groupBy';
import { Loader } from '../Loader';
import PaginationBook from '../PaginationBook';
import { CategoryChart } from '../CategoryChart';
import { useCallback } from 'react';
import { DataEntry } from 'react-minimal-pie-chart/types/commonTypes';
import { addCategories } from '../../store/modules/books/actions';

import './styles.scss';

export const BookList: React.FC = () => {
  const books = useSelector<IApplicationState, IBookState[]>(state => 
    state.application.searchBook.items
  );
  const app = useSelector<IApplicationState, IApplicationBooks>(state => 
    state.application
  );
  const dispatch = useDispatch();

  const generateColor = useCallback(() => {
    const hexColor = (Math.random() * 0xFFFFFF<<0).toString(16);
    return `#${hexColor}`.toUpperCase();
  }, []);

  const getCategories = useCallback(() => {
    
    const categoriesListObjects = books.map(book => {
      return {
        name: book.volumeInfo.categories?.join() || 'Sem categoria'
      };
    })

    const result = groupBy(categoriesListObjects, 'name');
    const categories = Object.keys(result);

    const data: DataEntry[] = categories.map((category, index) => (
      {
        title: categories[index],
        value: result[category].length,
        color: generateColor(),
      }
    ));

    dispatch(addCategories(data));

  }, [books, generateColor, dispatch]);

  useEffect(() => {
    getCategories();
  }, [getCategories, books]);

  return (
    <div className="book-list-container">
      {
        app.categories.length > 0 && (
          <CategoryChart 
            data={app.categories}
          />
        )
      }
      <Row>
        {
          app.loading ? (
            <Loader />
          ) : (
            <>
              {
                books.map(book => (
                  <Col xl={3} key={book.id} style={{ padding: 4 }}>
                    <BookCard book={book} />
                  </Col>
                ))
              }
              {
                app.searchBook.items.length > 0 && (
                  <PaginationBook />
                )
              }
            </>
          )
        }
      </Row>
    </div>
  );
}
