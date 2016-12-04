import React from 'react';
import TodoAction from './todo_action';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    // we need to keep value, or use ref to get value
    this.state = { text: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);    
  }
  onChange(event) {
    this.setState({ text: event.target.value });
  }
  onSubmit() {
    TodoAction.addTodo(this.state.text);
    this.setState({ text: '' });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.text}
          type="text"
          placeholder="input todo"
          onChange={this.onChange}
        />
        <button onClick={this.onSubmit}>submit</button>
      </div>
    );
  }
}
