import React from 'react';
import Splash from '../pages/splash';
import Container from 'react-bootstrap/container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Container fluid={false}>
      <Splash/>

    </Container>
  );
}

export default App;
