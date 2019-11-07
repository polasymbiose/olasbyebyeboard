import React from 'react';
import './App.css';
import Animoji from './components/Animoji/Animoji';

function App() {
  return (
    <div className="App">
      <h1>say it with ola</h1>
      <div className="moji" >
        <Animoji src={'yes'}/>
        <Animoji src={'lol'}/>
        <Animoji src={'love'}/>
        <Animoji src={'boo'}/>
        <Animoji src={'thinking'}/>
        <Animoji src={'wow'}/>
        <Animoji src={'brainfuck'}/>
      </div>
      <p className="foo">this project was created with <span>love</span></p>
    </div>
  );
}

export default App;
