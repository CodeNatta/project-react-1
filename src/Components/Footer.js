import React from 'react'

export default function Footer(props) {
  return (
    <div style={{
        marginTop:'10px',
        padding:'10px',
        position:'fixed',
        bottom:'0',
        left:'0',
        width:'100%',
        backgroundColor: props.mode==='light'?'#CAD5E2':'#253898',
        color: props.mode==='dark'?'white':'black',
        textAlign:'center'
    }}>
        <p>Designed and Developed by Natraj Shenoy</p>
    </div>
  )
}
