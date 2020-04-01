import React from 'react';
import Header from './components/Header'
import Welcome from './components/Welcome'
import './dist/App.css';

function App() {

  return (
    <div>
      <Header />
      <div>
        <Welcome />
      </div>
    </div>
  )
}

export default App;
