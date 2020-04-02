import React from 'react';
import Header from './components/Header'
import Welcome from './components/Welcome'
import './dist/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {

  return (
    <Router>
      <div>
        <Route exact path="/" component={Header}></Route>
        <Welcome />
      </div>
    </Router>
  )
}

export default App;
