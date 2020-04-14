import React from 'react';
import Header from './components/overlay/Header'
import Welcome from './components/Welcome'
import About from './components/About'
import SideBar from './components/overlay/SideBar'
import Todos from './components/todo-window/Todos'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {

  return (
    <Router>
      <React.Fragment>
        <Welcome />
        <Header />
        <SideBar />
        <Route exact path="/" component={Todos}></Route>
        <Route exact path="/about" component={About}></Route>
      </React.Fragment>
    </Router>
  )
}

export default App;
