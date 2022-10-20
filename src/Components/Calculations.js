import React from 'react'

import Output from './Buttons'

export default function Calculations(props) {
  return (
    <div style={{ color: props.mode==='dark'?'white':'black'}}>
         <h1 style={{textAlign:'center'}}>{props.heading}</h1>
         <hr/>
        <div style={{
            display:'flex',
            justifyContent:'center', 
            color: props.mode==='dark'?'white':'black'}}>
                <div>
                <Output/>
                </div>
            </div>
        
    </div>
  )
}
