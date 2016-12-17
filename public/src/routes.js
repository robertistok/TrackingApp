import React from 'react';
import { Route, IndexRoute } from 'react-router';

import FormContainer from './containers/FormContainer';
import AppContainer from './containers/AppContainer';
import Login from './containers/LoginFormContainer';

const requireAuth = (nextState, replaceState) => {
  if(!sessionStorage.getItem("jwtToken")) {
    replaceState({nextPathname: nextState.location.pathname }, "/");
    alert("Please log in first!");
  }
}

export default (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={Login} />
    <Route path='terminals' component={FormContainer} onEnter={requireAuth}/>
  </Route>
)
