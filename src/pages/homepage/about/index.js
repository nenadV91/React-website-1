import React, { Component } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import './index.style.scss';

import SectionTitle from 'components/section_title';
import {Controlled as CodeMirror} from 'react-codemirror2'

import code from './code.js';

import {
  Container, Row, Col
} from 'reactstrap'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: code,
      readOnly: true,
      mode: 'javascript',
    }
  }

  render() {
    var options = {
      lineNumbers: true,
      readOnly: this.state.readOnly,
      mode: this.state.mode
    };

    return (
      <section id="about">
        <div className="bg"></div>
        
        <Container>
          <SectionTitle title={"What we do"} />

          <Row>
            <Col md={{size: 10, offset: 1}} lg={{size: 8, offset: 2}}>
              <blockquote className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni deserunt iste placeat suscipit itaque molestiae natus accusantium, optio qui necessitatibus, eaque distinctio odio adipisci autem quaerat blanditiis. Corporis pariatur, recusandae.</blockquote>

              <CodeMirror 
                className="code-mirror"
                ref="editor" 
                value={this.state.code} 
                onChange={this.updateCode} 
                options={options} 
                autoFocus={true} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default index
