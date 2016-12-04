import React from 'react';
import { Link } from 'react-router';

export default class Repo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.error('Repo componentDidMount', this.props);
  }
  componentWillUnmount() {
    console.error('Repo componentWillUnmount', this.props);
  }
  render() {
    return (
      <div>
        <div>{this.props.params.username}: {this.props.params.reponame}</div>
        <Link to='/repos'>Repos</Link>
      </div>
    );
  }
}
