import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.error(this, React);
  }
  handleClick() {
    this.setState((prevState, props) => {
      prevState.isToggle = !prevState.isToggle;
      return prevState;
    });
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggle? 'ON': 'OFF'}
      </button>
    );
  }
}
