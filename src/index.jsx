import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';

document.addEventListener('DOMContentLoaded', () => {
  let div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<Hello />, div);
});
