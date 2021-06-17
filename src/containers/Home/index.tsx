import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SearchSection } from '../../components/SearchSection';
import './styles.scss';

export const Home: React.FC = () => {
  const books = useSelector(state => state);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <div>
      <SearchSection />
      <h1 style={{ marginTop: 40 }}>Home Page</h1>
    </div>
  );
}
