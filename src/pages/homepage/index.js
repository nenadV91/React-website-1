import React, { Fragment, Component } from 'react';

import Header from './header';
import Services from './services';
import About from './about';

class index extends Component {
  render() {
    return <Fragment>
      <Header />
      <Services />
      <About />
    </Fragment>
  }
}

export default index
