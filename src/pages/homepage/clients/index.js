import React, { Component } from 'react';
import SectionTitle from 'components/section_title';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.style.scss';

import {
  Container, Row, Col
} from 'reactstrap';
import Slider from "react-slick";
import data from './data';


class index extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
    };

    return (
      <section id="clients">
        <Container>
          <SectionTitle title={"What our clients say"} />

          <Row>
            <Col md={{size: 10, offset: 1}}>
              <Slider {...settings}>
                {data.map(client => <div className="slider-item">
                  <div className="clients-item">
                    <h5>{client.name}</h5>
                    <h6>{client.company}</h6>
                    <p>{client.text}</p>
                  </div>
                </div>)}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default index
