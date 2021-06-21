import React from 'react';
import FavoriteBookList from '../../components/FavoriteBookList';

const FavoritesBooks: React.FC = () => {
  return (
    <div style={{ marginTop: '4rem', paddingLeft: '10%', paddingRight: '10%' }}>
      <FavoriteBookList />
    </div>
  );
}

export default FavoritesBooks;