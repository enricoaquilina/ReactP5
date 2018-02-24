import React, { Component } from 'react';
import logo from './logo.svg';
import flower from './flower.jpg';
import './App.css';
import PropTypes from "prop-types";
import p5 from 'p5';
import sketch from './sketches/sketch.js';
import sketch2 from './sketches/sketch2.js';
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


  static propTypes = {
    p5Props: PropTypes.object.isRequired,
    getValue: PropTypes.func.isRequired,
    onReady: PropTypes.func.isRequired,
  };



  componentDidMount() {
    this.canvas = new p5(sketch, "app-p5_container");
    // this.canvas = new p5(sketch, "app-p5_cont");
    // this.canvas.setOnReady(this.props.onReady);
  }

  componentWillReceiveProps(nextProps) {
    this.canvas.pushProps({ ...this.props.p5Props, getValue: this.props.getValue });
  }

  shouldComponentUpdate() { // just in case :)
    return false;
  }

  componentWillUnmount() {
    this.canvas.remove();
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Decentralized Design</h1>
        </header>

{/* <Container className="App-Pack">
  <Row className="App-row">
      <Col sm="6" className="App-choices">
      <CardBody className="App-choices-body">
      <CardImg className="imgFlower"  src={flower}   />
      <FormGroup row className="App-last">
            <Button color="primary" sm={10}> Vote </Button>
          <Label for="exampleEmail" sm={4}>Total count: 0</Label>
        </FormGroup>
                  </CardBody>
      </Col>
      <Col sm="6" className="App-choices" >
      <CardBody className="App-choices-body">
      <CardImg className="imgFlower" src={flower}  />
      <FormGroup row className="App-last">
            <Button color="primary" sm={10}> Vote </Button>
          <Label for="exampleEmail" sm={4}>Total count: 0</Label>
        </FormGroup>
          </CardBody>
      </Col>
    </Row>


   <Row className="App-row">
      <Col sm="6" className="App-choices">
      <CardBody >
      <CardImg className="imgFlower" src={flower}  />
      <FormGroup row className="App-last">
            <Button color="primary" sm={10}> Vote </Button>
          <Label for="exampleEmail" sm={4}>Total count: 0</Label>
        </FormGroup>
        </CardBody>
      </Col>
      <Col sm="6" className="App-choices">
      <CardBody className="App-choices-body"> 
      <CardImg className="imgFlower" src={flower}  />
      <FormGroup row className="App-last">
            <Button color="primary" sm={10}> Vote </Button>
          <Label for="exampleEmail" sm={4}>Total count: 0</Label>
        </FormGroup>
        </CardBody>

      </Col>
   </Row>




</Container> */}

  <div id="app-p5_container"> 
  </div>
      </div>
    );
  }
}

export default App;

