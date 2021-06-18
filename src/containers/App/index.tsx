import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Header } from '../../components/Header';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';

import Routes from '../../routes/__Routes';

const App = () => (
  <BrowserRouter>
    <ReactNotification />
    <Header />
    <Switch>
      <Routes />
    </Switch>
  </BrowserRouter>
);

export default App;
