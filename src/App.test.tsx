import React from 'react';
import { render } from '@testing-library/react';
import App from './containers/App';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/"
  })
}));

test('renders learn react link', () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});
