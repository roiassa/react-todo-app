import React from 'react';
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import SideBar from './components/SideBar'
import './dist/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {

  return (
    <Router>
      <div>
        <Header />
        <Welcome />
        <Route exact path="/about" component={Header,About,SideBar}></Route>
      </div>
    </Router>
  )
}

export default App;
