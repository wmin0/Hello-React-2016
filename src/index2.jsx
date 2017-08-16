import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.error(this.myDOM);
    this.myDOM.setAttribute('on', 'meow');
  }
  render() {
    return (
      <div
        ref={(dom) => { this.myDOM = dom; }}
        style={{color: 'red'}}
      >
        owo
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<Hello></Hello>, div);
});
