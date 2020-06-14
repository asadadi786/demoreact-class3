import React from 'react';
import Dinner from './dinner.js';
import './App.css';

function App() {
  
  render() {
    const mystyle1 = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "14px",
      fontFamily: "Arial"
      
    };
    const mystyle2 = {
      color: "white",
      backgroundColor: "DodgerBlue",
      fontFamily: "Arial"
      
    };

  return( 
  <div className="App" style={mystyle2}>
    <h1  style={mystyle1}>
   
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
