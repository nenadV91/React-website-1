import React, { Component } from 'react';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

class ServiceItem extends Component {
  render() {
    let {
      icon,
      text,
      title
    } = this.props;

    return (
      <Col sm="6">
        <div className="service-item">
          <i className={`etline ${icon}`}></i>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </Col>
    );
  }
}

export default ServiceItem
