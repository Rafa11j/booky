import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../../containers/Home';
import { BookDetail } from '../../containers/BookDetail';
import FavoritesBooks from '../../containers/FavoritesBooks';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={FavoritesBooks} />
      <Route exact path="/book/:id" component={BookDetail} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
