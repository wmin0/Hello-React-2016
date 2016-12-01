import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello';
import ClockDemo from './clock_demo';
import Toggle from './toggle';

document.addEventListener('DOMContentLoaded', () => {
  let div = document.createElement('div');
  document.body.appendChild(div);
  //ReactDOM.render(<Hello />, div);
  //ReactDOM.render(<ClockDemo />, div);
  ReactDOM.render(<Toggle />, div);
});
