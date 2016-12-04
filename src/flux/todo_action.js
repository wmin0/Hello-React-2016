import dispatcher from './dispatcher';
import { ADD_TODO } from './action_type';

export default {
  addTodo(text) {
    dispatcher.dispatch({
      type: ADD_TODO,
      payload: { text: text }
    });
  }
}
