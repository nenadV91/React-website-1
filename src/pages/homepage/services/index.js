import React, { Component } from 'react';
import data from './data.js';
import Service from 'components/service_item';
import SectionTitle from 'components/section_title';

import {
  Container,
  Row
} from 'reactstrap';

class Services extends Component {
  render() {
    return (
      <section id="services">
        <Container>

          <Row>
            {data.map(service => <Service 
            key={service.id}
            icon={service.icon}
            title={service.title}
            text={service.text}/>)}
          </Row>
        </Container>
      </section>
    );
  }
}

export default Services
