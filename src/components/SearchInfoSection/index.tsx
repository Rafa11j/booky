import React from 'react';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../store';

import './styles.scss';

export const SearchInfoSection: React.FC = () => {
  const searchValue = useSelector<IApplicationState, string>(state => state.application.searchValue);
  const totalItems = useSelector<IApplicationState, number>(state => state.application.searchBook.totalItems);

  return (
    <div className="search-info-section">
      {
        searchValue && (
          <h4>
            Foram encontrados
            <strong> {totalItems} </strong>
            resultados para a pesquisa:
            <strong> {searchValue}</strong>
          </h4>
        )
      }
    </div>
  );
}
