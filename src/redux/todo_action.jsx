import { createAction } from 'redux-actions';
import { ADD_TODO, CHANGE_TEXT } from './action_type';

export const addTodo = createAction(ADD_TODO);
export const changeText = createAction(CHANGE_TEXT);
export const asyncAddTodo = () => {
  return (dispatch) => {
    setTimeout(() => dispatch(addTodo()), 1000);
  };
};
