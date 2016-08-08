'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';
import RadioGroup from './src/index.js';

console.log('hello world');

class App extends Component {
  handleChange = () => {
    console.log('clicked on a radio button!');
  }

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <p>This is an example of Radio buttons in React</p>
        <RadioGroup
          values={['Pizza', 'Tacos', 'Burgers']}
          className="RadioGroup"
          clickHandler={this.handleChange} />
      </div>
    )
  }
}


render(<App/>, document.getElementById('react-mount'));
