import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, idx) => {
            return <li key={idx}>{todo.get('text')}</li>;
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.getIn(['TodoReducer', 'todos'])
  }
}

export default connect(
  mapStateToProps
)(TodoList);
