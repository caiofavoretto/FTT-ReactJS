import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Create from './pages/Create';
import Question from './pages/Question';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Create} />
        <Route path="/nova-pergunta" exact component={Question} />
      </Switch>
    </BrowserRouter>
  );
}
