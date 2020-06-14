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
    <Dinner dish ="Mutton Chop" sweet =  "Saviyan" tea = "Chaiii"/>
    <hr/>
    
    <Dinner dish ="Nehari" sweet =  "Custurd" tea = "Chaiii"/>
    <hr/>

    <Dinner dish ="Dumba Karahi" sweet =  "Garato Jalebi" tea = "Chaiii"/>
    </div>
  </div>
    );
}

export default App;
