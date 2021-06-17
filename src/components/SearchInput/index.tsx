import React, { ChangeEvent, useCallback } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import { MdSearch, MdInfoOutline } from 'react-icons/md';

import './styls.scss';
import { api } from '../../services/api';

export const SearchInput: React.FC = () => {
  const [expandInput, setExpandInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onFocusInput = useCallback(() => {
    setExpandInput(true);
  }, []);

  const onBlurInput = useCallback(() => {
    setExpandInput(false);
  }, []);

  const handleSearch = useCallback(async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.length > 2) {
      console.log(searchValue);
      const response = await api.get(`/volumes?q=${searchValue}`);
      console.log(response);
    }
  }, [searchValue]);

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
