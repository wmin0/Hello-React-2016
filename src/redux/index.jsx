import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import TodoForm from './todo_form';
import TodoList from './todo_list';

document.addEventListener('DOMContentLoaded', () => {
  let div = document.createElement('div');
  document.body.appendChild(div);
  render((
    <Provider store={store}>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  ), div);
});
