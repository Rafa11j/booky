import React, { ChangeEvent, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MdSearch, MdInfoOutline } from 'react-icons/md';

import { api } from '../../services/api';
import { searchBooks, startLoading, stopLoading } from '../../store/modules/books/actions';
import { useNotification } from '../../hooks/useNotification';

import './styls.scss';

export const SearchInput: React.FC = () => {
  const { addNotification } = useNotification();
  const dispatch = useDispatch();
  const [expandInput, setExpandInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const supportMessage = 'Digite pelo menos 3 caracteres para que a busca seja realizada.';

  const onFocusInput = useCallback(() => {
    setExpandInput(true);
  }, []);

  const onBlurInput = useCallback(() => {
    setExpandInput(false);
  }, []);

  const handleSearch = useCallback(async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.length > 2) {
      try {
        dispatch(startLoading());
        const response = await api.get(`/volumes?q=${searchValue}&maxResults=12`);
        dispatch(searchBooks(response.data, searchValue));
        setSearchValue('');
      } catch {
        addNotification({
          title: 'Ops!',
          message: 'Falha ao pesquisar livros!',
          type: "warning",
        });
        
        dispatch(stopLoading());
      }
    } else {
      addNotification({
        title: 'Dica!',
        message: supportMessage,
        type: "default",
      });
    }
  }, [searchValue, dispatch, addNotification]);

  return (
    <form className={`search-input ${expandInput && 'expand-search-input'}`} onSubmit={handleSearch}>
      <MdSearch />
      <input 
        type="text" 
        placeholder="Pesquisar por livros"
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="tooltip-info">
            {supportMessage}
          </Tooltip>
        }
      >
        <MdInfoOutline />
      </OverlayTrigger>
    </form>
  );
}
