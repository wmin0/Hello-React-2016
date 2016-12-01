import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.error(this.props.name, 'did mount');
  }
  componentWillUnmount() {
    console.error(this.props.name, 'will unmount');
  }
  render() {
    return (
      <div>{this.props.name}: {this.props.sec} {this.props.children}</div>
    );
  }
}

export default class ClockDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test1: 5,
      test2: 10
    };
    this.countDown = this.countDown.bind(this);
  }
  componentDidMount() {
    this.countDown();
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  countDown() {
    this.setState((prevState, props) => {
      Object.keys(prevState).forEach((key) => {
        if (prevState[key] > 0) {
          --prevState[key];
        }
      });
      return prevState;
    });
    this.timeout = setTimeout(this.countDown, 1000);
  }
  render() {
    var childs = [];
    Object.keys(this.state).forEach((key) => {
      if (this.state[key] > 0) {
        childs.push(<Clock name={key} key={key} sec={this.state[key]}>owo</Clock>);
      }
    });
    return (
      <div>{childs}</div>
    );
  }
}
