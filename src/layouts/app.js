import React from 'react';
import './app.styles.scss';

import Nav from 'components/navbar'
import Homepage from 'pages/homepage';

const App = () => {
  return <div>
    <Nav />
    <Homepage />
  </div>
}

export default App;