import React from 'react';
import Header from './components/Header'
import Welcome from './components/Welcome'
import './dist/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <Header />
      <Welcome />
    </div>
  )
}

export default App;
