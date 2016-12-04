import React from 'react';
import { IndexLink, Link } from 'react-router';
import './app.scss';

class NavLink extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Link {...this.props} activeClassName='active' />;
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.error('App componentDidMount');
  }
  componentWillUnmount() {
    console.error('App componentWillUnmount');
  }
  render() {

    //<li><IndexLink to='/' activeClassName='active'>Home</Index></li>
    return (
      <div>
        <ul className='nav-bar'>
          <li><NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
