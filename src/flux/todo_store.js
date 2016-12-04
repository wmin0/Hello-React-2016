import { EventEmitter } from 'events';
import dispatcher from './dispatcher';
import { ADD_TODO } from './action_type';
import dummyStore from './dummy_store';

class Store extends EventEmitter {
  constructor() {
    super();
    this.data = {
      todos: []
    }
  }
  addChangeListener(fn) {
    this.on(ADD_TODO, fn);
  }
  removeChangeListener(fn) {
    this.removeListener(ADD_TODO, fn);
  }
  getTodos() {
    return this.data.todos;
  }
  addTodo(text) {
    this.data.todos.push(text);
    this.emit(ADD_TODO);
  }
}

const store = new Store();

dispatcher.register((action) => {
  switch(action.type) {
    case ADD_TODO:
      dispatcher.waitFor([dummyStore.dispatchToken]);
      console.error('todo store dispatch');
      store.addTodo(action.payload.text);
      break;
    default:
      break;
  }
  return true;
});

export default store;
