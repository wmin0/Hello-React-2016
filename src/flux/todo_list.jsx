import React from 'react';
import todoStore from './todo_store';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: todoStore.getTodos() };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    todoStore.addChangeListener(this.onChange);
  }
  componentWillUnmount() {
    todoStore.removeChangeListener(this.onChange);
  }
  onChange() {
    this.setState({ todos: todoStore.getTodos() });
  }
  render() {
    return (
      <ul>
        {
          this.state.todos.map((text, idx) => {
            return <li key={idx}>{text}</li>;
          })
        }
      </ul>
    );
  }
}
