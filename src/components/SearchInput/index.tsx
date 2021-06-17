import React, { ChangeEvent, useCallback, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MdSearch, MdInfoOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { api } from '../../services/api';
import { searchBooks } from '../../store/modules/books/actions';

import './styls.scss';

export const SearchInput: React.FC = () => {
  const [expandInput, setExpandInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const onFocusInput = useCallback(() => {
    setExpandInput(true);
  }, []);

  const onBlurInput = useCallback(() => {
    setExpandInput(false);
  }, []);

  const handleSearch = useCallback(async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.length > 2) {
      const response = await api.get(`/volumes?q=${searchValue}&maxResults=12`);
      console.log(response);
      dispatch(searchBooks(response.data));
    }
  }, [searchValue, dispatch]);

  return (
    <form className={`search-input ${expandInput && 'expand-search-input'}`} onSubmit={handleSearch}>
      <MdSearch />
      <input 
        type="text" 
        placeholder="Pesquisar por livros" 
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        onChange={e => setSearchValue(e.target.value)}
      />
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="tooltip-info">
            Digite pelo menos 3 caracteres para que a busca seja realizada.
          </Tooltip>
        }
      >
        <MdInfoOutline />
      </OverlayTrigger>
    </form>
  );
}
