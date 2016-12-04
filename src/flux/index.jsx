import React from 'react';

import { render } from 'react-dom';

import TodoForm from './todo_form';
import TodoList from './todo_list';

document.addEventListener('DOMContentLoaded', () => {
  let div = document.createElement('div');
  document.body.appendChild(div);
  render((
    <div>
      <TodoForm />
      <TodoList />
    </div>
  ), div);
});
