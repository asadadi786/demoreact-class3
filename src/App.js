import React from 'react';
import Dinner from './dinner.js';
import './App.css';

function App() {
  return( 
  <div className="App" style={{color: "lightgrey"}}>
    <h1  style={{color: "lightblue"}}>
   
      Desi MummyDaddy Restaurant
      </h1>
    
    <Dinner dish ="Mutton Chop" sweet =  "Saviyan" tea = "Chaiii"/>
    <hr/>
    
    <Dinner dish ="Nehari" sweet =  "Custurd" tea = "Chaiii"/>
    <hr/>

    <Dinner dish ="Dumba Karahi" sweet =  "Garato Jalebi" tea = "Chaiii"/>

  </div>
    );
}

export default App;
