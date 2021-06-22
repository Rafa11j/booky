import React from 'react';
import { render, screen } from '@testing-library/react';
import BookCard from './';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { booksMocks } from '../../mocks/bookMocks';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
const bookProps = booksMocks[0];
describe('Tests BookCard Component', () => {
  test('Render BookCard Component', () => {
    const history = createMemoryHistory();
    
    const { container } = render(
      <Router history={history}>
        <BookCard 
          book={bookProps}
        />
      </Router>
    );

    expect(container).toBeDefined();
  });

  test('Verify Book Props Rendered', () => {
    const history = createMemoryHistory();
    
    render(
      <Router history={history}>
        <BookCard 
          book={bookProps}
        />
      </Router>
    );

    expect(screen.getByTestId('book-title')).toHaveTextContent('Título do livro teste');
    expect(screen.getByTestId('book-authors'))
      .toHaveTextContent('Autor 1, Autor 2');
  });
});
