import React, { useCallback } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNotification } from '../../hooks/useNotification';
import { api } from '../../services/api';
import { IApplicationState } from '../../store';
import { nextPage, previousPage, startLoading, stopLoading } from '../../store/modules/books/actions';
import { IApplicationBooks } from '../../store/modules/books/types';

import './styles.scss';

const PaginationBook: React.FC = () => {
  const dispatch = useDispatch();
  const { addNotification } = useNotification();
  const app = useSelector<IApplicationState, IApplicationBooks>(state => 
    state.application
  );
  
  const onNextPage = useCallback(async () => {
    try {
      dispatch(startLoading());
      const startIndex = (app.searchBook.page + 1) * 12;
      const searchValue = app.searchValue;
      const response = await api.get(`/volumes?q=${searchValue}&maxResults=12&startIndex=${startIndex}`);
      dispatch(nextPage(response.data));
    } catch {
      addNotification({
        title: 'Ops!',
        message: 'Falha ao carregar livros!',
        type: "warning",
      });
    } finally {
      dispatch(stopLoading());
    }
  }, [dispatch, app, addNotification]);

  console.log(app.searchBook);

  const onPreviousPage = useCallback(async () => {
    try {
      dispatch(startLoading());
      const startIndex = (app.searchBook.page - 1) * 12;
      const searchValue = app.searchValue;
      const response = await api.get(`/volumes?q=${searchValue}&maxResults=12&startIndex=${startIndex}`);
      dispatch(previousPage(response.data));
    } catch {
      addNotification({
        title: 'Ops!',
        message: 'Falha ao carregar livros!',
        type: "warning",
      });
    } finally {
      dispatch(stopLoading());
    }
  }, [dispatch, app, addNotification]);

  console.log(app.searchBook);

  return (
    <div className="book-pagination-container">
      <button disabled={app.searchBook.page === 0} onClick={onPreviousPage}>
        <MdChevronLeft />
      </button>
      <button disabled={app.searchBook.items.length < 12} onClick={onNextPage}>
        <MdChevronRight />
      </button>
    </div>
  );
}

export default PaginationBook;