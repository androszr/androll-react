import React from 'react';
import { Switch, Route } from 'react-router';

export default (
  <Switch>
    <Route exact path='/' />
    <Route exact path='/about' />
    <Route exact path='/portfolio' />
    <Route exact path='/contact' />
    <Route exact path='/skills' />
  </Switch>
);