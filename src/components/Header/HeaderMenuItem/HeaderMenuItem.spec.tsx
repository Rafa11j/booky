import React from 'react';
import { render } from '@testing-library/react';
import { HeaderMenuItem } from '.';
import { MdHome } from 'react-icons/md';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Tests Header Component', () => {

  const propsMock = {
    path: '/',
    label: 'Início',
    icon: MdHome
  }

  test('Render Header Component', () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <HeaderMenuItem {...propsMock} />
      </Router>
    );
    expect(container).toBeDefined();
  });
});
