import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class SectionTitle extends Component {
  render() {
    let {
      title
    } = this.props;

    return (
      <Row className="text-center">
        <Col sm="12">
          <h3 className="section-title">{title}</h3>
        </Col>
      </Row>
    );
  }
}

export default SectionTitle
