import { Dispatcher } from 'flux';

class TodoDispatcher extends Dispatcher {
  constructor() {
    super();
  }
}

export default new TodoDispatcher();
