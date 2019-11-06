import React, { useState } from 'react';
import './App.css';
import Animoji from './components/Animoji/Animoji';
import boo from './assets/boo.mp3'
import yes from './assets/yes.mp3'
import lol from './assets/lol.mp3'
import brainfuck from './assets/brainfuck.mp3'
import wow from './assets/wow.mp3'
import love from './assets/love.mp3'
import thinking from './assets/thinking.mp3'

function App() {
  const [active, setactive] = useState('')
  return (
    <div className="App">
      <div className="moji" >
        <Animoji src={'yes'} audio={new Audio(yes)} setactive={setactive} active={active} />
        <Animoji src={'lol'} audio={new Audio(lol)} setactive={setactive} active={active} />
        <Animoji src={'love'} audio={new Audio(love)} setactive={setactive} active={active} />
        <Animoji src={'boo'} audio={new Audio(boo)}setactive={setactive} active={active} />
        <Animoji src={'thinking'} audio={new Audio(thinking)} setactive={setactive} active={active} />
        <Animoji src={'wow'} audio={new Audio(wow)} setactive={setactive} active={active} />
        <Animoji src={'brainfuck'} audio={new Audio(brainfuck)} setactive={setactive} active={active} />
      </div>
      <p className="foo">this project was created with <span>love</span></p>
    </div>
  );
}

export default App;
