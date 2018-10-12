import React, { Component } from 'react';
import {
  Row, Col, Form, Input, FormGroup
} from 'reactstrap';

class MyForm extends Component {
  render() {
    return (
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Input required placeholder="Your name..." />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Input required placeholder="Your email..." />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Input required type="textarea" placeholder="Enter email..." />
        </FormGroup>

        <button className="btn btn-color">Submit</button>
      </Form>
    );
  }
}

export default MyForm
