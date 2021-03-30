import React from 'react';
import logo from './img/logo.png'
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Board />
    </div>
  );
}

export default App;
