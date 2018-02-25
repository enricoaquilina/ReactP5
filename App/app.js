import React, { Component } from 'react';
import './App.css';
import PropTypes from "prop-types";
import p5 from 'p5';
import sketch from './sketches/sketch.js';
import P5Wrapper from 'react-p5-wrapper';

import { 
  Button,
  Container,
  Row,
  Label,
  FormGroup,
  Col,
  CardImg, 
  CardBody

 } from 'reactstrap';

class App extends Component {


  // static propTypes = {
  //   p5Props: PropTypes.object.isRequired,
  //   getValue: PropTypes.func.isRequired,
  //   onReady: PropTypes.func.isRequired,
  // };



  componentDidMount() {
    this.canvas = new p5(sketch, "face1");
    // this.canvas.setOnReady(this.props.onReady);
  }

  componentWillReceiveProps(nextProps) {
    // this.canvas.pushProps({ ...this.props.p5Props, getValue: this.props.getValue });
  }

  shouldComponentUpdate() { // just in case :)
    // return false;
  }

  componentWillUnmount() {
    // this.canvas.remove();
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Decentralized Design</h1>
        </header>
        <div id="face1"> 
        </div>
      </div>
    );
  }
}

export default App;
