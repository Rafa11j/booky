import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Header } from '../../components/Header';

import Routes from '../../routes/__Routes';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Routes />
    </Switch>
  </BrowserRouter>
);

export default App;
