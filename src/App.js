import React from 'react';
import Dinner from './dinner.js';
import './App.css';

function App() {
  
  
  return( 
  <div className="App">
    <h1  style={{backgroundColor : "DodgerBlue", color :"white",fontFamily :"arial", fontSize : "14", textAlign : "center"}}>
   
      Desi MummyDaddy Restaurant
      </h1>
    <div style={{backgroundColor : "lightblue", color :"white",fontFamily :"arial", fontSize : "10", textAlign : "center"}}> 
    <h2>
      Menu 1:
    <Dinner dish ="Mutton Chop" sweet =  "Saviyan" tea = "Chaiii"/>
    </h2>
    <hr/>
    Menu 2:
    <Dinner dish ="Nehari" sweet =  "Custurd" tea = "Chaiii"/>
    <hr/>
    Menu 3:
    <Dinner dish ="Dumba Karahi" sweet =  "Garato Jalebi" tea = "Chaiii"/>
      
    </div>
  </div>
    );
}

export default App;
