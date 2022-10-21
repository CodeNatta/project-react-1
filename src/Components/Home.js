import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
  return (
    <div style={{ color: props.mode==='dark'?'white':'black'}}>
        <h1>Check these two tools:</h1>
        <hr/>
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            color: props.mode==='dark'?'white':'black'
        }}>
            <h2>Calculations</h2>
            <Link to='/calculator'>
            <button className="btn btn-primary" type="button">Explore!</button>
            </Link>
            <hr/>
            <h2>Character checker</h2>
            <Link to='/charcheck'>
            <button className="btn btn-primary" type="button">Explore!</button>
            </Link>
            <hr/>
        </div>
        
    </div>
  )
}
