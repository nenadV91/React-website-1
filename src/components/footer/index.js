import React, { Component } from 'react';
import './index.style.scss';
import InfoItem from './InfoItem';
import Form from './Form';
import data from './data';

import {
  Container, Row, Col
} from 'reactstrap';

class index extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row className="align-items-center">
            <Col className="mb-4" sm={6}>
              <h1 className="display-1">Ready to <br className="d-none d-sm-block"/>start today?</h1>
              <div className="info">
                {data.map(item => <InfoItem data={item} key={item.id} />)}
              </div>
            </Col>

            <Col sm={6}>
              <h3 className="display-3">Get in touch</h3>
              <Form />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default index
