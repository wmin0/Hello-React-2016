import { EventEmitter } from 'events';
import dispatcher from './dispatcher';

class Store extends EventEmitter {
  constructor() {
    super();
  }
}

const store = new Store();

store.dispatchToken = dispatcher.register((action) => {
  console.error('dummy store dispatch');
  return true;
});

export default store;
