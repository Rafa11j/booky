import React from 'react';
import { MdHome, MdFavorite } from 'react-icons/md';

import './styles.scss';
import { HeaderMenuItem } from './HeaderMenuItem';

export const Header: React.FC = () => {
  return (
    <header className="app-header">
      <h3>Bookys</h3>
      <ul className="menu">
        <HeaderMenuItem 
          icon={MdHome}
          label="Início"
          path="/"
        />
        <HeaderMenuItem 
          icon={MdFavorite}
          label="Favoritos"
          path="/favorites"
        />
      </ul>
    </header>
  )
}
