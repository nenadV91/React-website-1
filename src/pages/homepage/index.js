import React, { Fragment, Component } from 'react';

import Header from './header';
import Services from './services';
import About from './about';
import Clients from './clients';
import Footer from 'components/footer';

class index extends Component {
  render() {
    return <Fragment>
      <Header />
      <Services />
      <About />
      <Clients />
      <Footer />
    </Fragment>
  }
}

export default index
