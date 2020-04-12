import React from 'react';
import Header from './components/overlay/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import SideBar from './components/overlay/SideBar'
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
        <Route exact path="/about" component={About}></Route>
      </React.Fragment>
    </Router>
  )
}

export default App;
