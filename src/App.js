import React from 'react';
import Header from './components/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import SideBar from './components/SideBar'
import Todo from './components/Todo'
import './dist/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {

  return (
    <Router>
      <React.Fragment>
        <Welcome />
        <Header />
        <SideBar />
        <Route exact path="/" component={Todo}></Route>
        <Route exact path="/about" component={Header, About}></Route>
      </React.Fragment>
    </Router>
  )
}

export default App;
