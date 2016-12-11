import Immutable from 'immutable'

export const TodoState = Immutable.fromJS({
  todos: [],
  todo: {
    id: '',
    text: '',
    update_at: '',
    completed: false
  }
});
