import { handleActions } from 'redux-actions';
import { TodoState } from './states';

export const TodoReducer = handleActions({
  ADD_TODO: (state) => {
    let todos = state.get('todos').push(state.get('todo'));
    return state.set('todos', todos);
  },
  CHANGE_TEXT: (state, { payload }) => {
    return state.merge({ 'todo': payload });
  }
}, TodoState);
