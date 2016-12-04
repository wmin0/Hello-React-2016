import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.error('Home componentDidMount');
  }
  componentWillUnmount() {
    console.error('Home componentWillUnmount');
  }
  render() {
    return <div>安安</div>;
  }
}
