import React from 'react';
import { connect } from 'react-redux';
import { changeText, asyncAddTodo } from './todo_action';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          value={this.props.todo.get('text')}
          type="text"
          placeholder="input todo"
          onChange={this.props.onChangeText}
        />
        <button onClick={this.props.onAddTodo}>submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.getIn(['TodoReducer', 'todo'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (event) => {
      dispatch(changeText({ text: event.target.value }));
    },
    onAddTodo: () => {
      //dispatch(addTodo());
      dispatch(asyncAddTodo());
      dispatch(changeText({ text: '' }));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
