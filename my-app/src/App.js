import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokecard
        id={4}
        name="Sumit"
      />
    </div>
  );
}

export default App;
