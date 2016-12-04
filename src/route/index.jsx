import React from 'react';

import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './app';
import Home from './home';
import Repos from './repos';
import Repo from './repo';

document.addEventListener('DOMContentLoaded', () => {
  let div = document.createElement('div');
  document.body.appendChild(div);
  render((
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/repos' component={Repos} />
        <Route path='/repo/:username/:reponame' component={Repo} />
      </Route>
    </Router>
  ), div);
});
