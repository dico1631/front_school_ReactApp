import { render } from '@testing-library/react';

import App from './App';
import { MemoryRouter } from 'react-router';

const context = describe;

describe('App', () => {
  context('when the current path is /', () => {
    it('renders the home page', () => {
      render((<MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      ));
      screen.getByText(/welcome/);
    });
  });
  
  context('when the current path is /about', () => {
    it('renders the about page', () => {
      render((<MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));
      screen.getByText(/about/);
    });
  });
});
