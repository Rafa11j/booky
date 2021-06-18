import React from 'react';
import { BookList } from '../../components/BookList';
import { SearchInfoSection } from '../../components/SearchInfoSection';
import { SearchSection } from '../../components/SearchSection';

import './styles.scss';

export const Home: React.FC = () => {

  return (
    <div>
      <SearchSection />
      <div style={{ marginTop: '4rem', paddingLeft: '10%', paddingRight: '10%' }}>
        <SearchInfoSection />
        <BookList />
      </div>
    </div>
  );
}
