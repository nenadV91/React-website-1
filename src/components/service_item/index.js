import React, { Component } from 'react';
import './index.style.scss';

import {
  Container,
  Row,
  Col
} from 'reactstrap';

class index extends Component {
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

export default index
