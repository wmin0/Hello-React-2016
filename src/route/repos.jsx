import React from 'react';
import { hashHistory } from 'react-router';

export default class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.onLink = this.onLink.bind(this);
  }
  onLink(event) {
    event.preventDefault();
    hashHistory.push(event.target.dataset.to);
  }
  componentDidMount() {
    console.error('Repos componentDidMount');
  }
  componentWillUnmount() {
    console.error('Repos componentWillUnmount');
  }
  render() {
    return (
      <div>
        <ul>
          <li><a data-to='/repo/reactjs/react-router' onClick={this.onLink}>React Router</a></li>
          <li><a data-to='/repo/facebook/react' onClick={this.onLink}>React</a></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
