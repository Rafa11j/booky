import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '.';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Tests Header Component', () => {
  test('Render Header Component', () => {
    const history = createMemoryHistory();
    
    const { container } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    expect(container).toBeDefined();
  });
});
