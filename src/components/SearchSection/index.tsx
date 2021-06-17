import React from 'react';
import { SearchInput } from '../SearchInput';

import './styles.scss';

export const SearchSection: React.FC = () => {
  return (
    <div className="search-section">
      <SearchInput />
    </div>
  );
}
