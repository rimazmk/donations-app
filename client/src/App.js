import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Menu from './components/Menu';
import Homepage from './components/Homepage';
import PaymentForm from './components/PaymentForm';

function App() {
  return (
    <Router>
      <Menu />
      <Route path="/" exact component={Homepage} />
      <Route path="/donate" component={PaymentForm} />
    </Router>
  );
}

export default App;
