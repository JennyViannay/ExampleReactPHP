import React from 'react';
import Count from './components/Count';
import Array from './components/Array';
import './assets/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count />
        <hr />
        <Array />
      </header>
    </div>
  );
}

export default App;
