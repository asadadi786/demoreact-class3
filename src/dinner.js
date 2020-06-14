import React from 'react';


    function Dinner (props){
        return( 
            <div>
                <h1>Today we are serving {props.dish}</h1>
                <h1>and in sweet we have {props.sweet}</h1>
                <h1>afterwards, {props.tea} tu banti </h1>
                
            </div>
              )
    }


export default Dinner;