import React from 'react';


    function Dinner (props){
        return( 
            <div>
                <h1>Today we are serving {props.dish}</h1>
                <h1>Today we are serving {props.sweet}</h1>
                <h1>Today we are serving {props.tea}</h1>
                
            </div>
              )
    }


export default Dinner;