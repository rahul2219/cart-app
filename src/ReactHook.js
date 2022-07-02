import React from 'react';
import {useState,useEffect} from 'react';

function ReactHook(props){
    const [value,setValue] = useState(0);

    useEffect(()=>{
        console.log(value);
    })

    return(
        <div style={{width:200}}>
            <p style={{textAlign:'center'}}>Count Value is : {value}</p>
            <div style={{marginLeft:10}}>
                <button onClick={()=>{setValue(0)}}>Reset</button>
                <button onClick={()=>{setValue(value+1)}}>Plus(+)</button>
                <button onClick={()=>{setValue(value-1)}}>Minus(-)</button>

            </div>
        </div>
    )
}
export default ReactHook;