import React from 'react';
import Dinner from './dinner.js';
import './App.css';

function App() {
  return( 
  <div className="App">
    <h1>Hello World from Muhammad Asad Ilyas</h1>
    
    <Dinner dish ="Mutton Chop" sweet =  "Saviyan"/>
    <hr/>
    
    <Dinner dish ="Nehari" sweet =  "Custurd"/>
    <hr/>

    <Dinner dish ="Dumba Karahi" sweet =  "Jalebi"/>

  </div>
    );
}

export default App;
