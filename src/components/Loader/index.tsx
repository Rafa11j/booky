import React from 'react';
import { Spinner } from 'react-bootstrap';

import './styles.scss';

export const Loader: React.FC = () => {
  return (
    <div className="book-loader-container">
      <Spinner 
        animation="border" 
        variant="info" 
        className="book-loader" 
      />
    </div>
  );
}
