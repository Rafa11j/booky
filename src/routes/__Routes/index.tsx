import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home } from '../../containers/Home';
import { BookDetail } from '../../containers/BookDetail';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/book/:id" component={BookDetail} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
