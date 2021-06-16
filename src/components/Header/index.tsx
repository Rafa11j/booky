import React from 'react';
import { Navbar } from 'react-bootstrap';
import './styles.scss';

export const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="">
      <h3>Bookys</h3>
    </Navbar>
  )
}
