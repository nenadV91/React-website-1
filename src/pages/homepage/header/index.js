import React from 'react';
import './index.style.scss';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Header = props => {
  return <div className="header">
    <div className="bg"></div>
    <Container>
      <Row>
        <Col>
          <h1 className="display-1">Hello World!</h1>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br className="d-none d-sm-block"/>Voluptatibus provident est vel excepturi ullam architecto fugit.</p>
          <button className="btn btn-white transparent">Start today</button>
        </Col>
      </Row>
    </Container>
  </div> 
}

export default Header;