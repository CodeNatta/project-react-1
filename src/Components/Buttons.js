import React, { useState }  from 'react'
export default function Output(props) {
    const Styles={ width:'100px',
    border:'1px solid #222',
    color:'black',
    textAlign:'center',
    fontSize:'16px',
    padding: '10px 20px',
    display:'inline-flex',
    tetxtDecoration:'none'   
    }
    const[input, setInput]= useState("")

    const handleChange=(event)=>{
        setInput(event.target.value)

    }

    const handleDelete=()=>{
       
        setInput("")

    }
    const handleClear=()=>{
        try{
            setInput(input.slice(0,-1))
        }catch(error){
            console.log(error)
        }     
    }
    const handleCalculate=()=>{
        try{
             setInput(eval(input))
        }catch(error){
            console.log(error)
        }
    }
  return (
   
    <div className='frame' style={{color: props.mode==='dark'?'white':'black', fontSize:'110%'}}>
        <input type="text" onChange={handleChange} value={input} style={{width:'400px',padding:'10px'}}  aria-label="default input example"></input>
         <div className="button-row">
      <button value="Clear" type="button"  style={Styles} onClick={handleClear} >Clear</button>
      <button value="Delete" type="button" style={Styles}  onClick={handleDelete} >Delete</button>
      <button value="." type="button" style={Styles}  onClick={e=>setInput(input + e.target.value)} >.</button>
      <button value="/" type="button" style={Styles}  onClick={e=>setInput(input + e.target.value)} >/</button>
    </div>
    <div className="button-row">
      <button value="7"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)} >7</button>
      <button value="8"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)} >8</button>
      <button value="9"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)} >9</button>
      <button value="*"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)} >*</button>
    </div>
    <div className="button-row">
      <button value="4"type="button" style={Styles}  onClick={e=>setInput(input + e.target.value)}>4</button>
      <button value="5"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)} >5</button>
      <button value="6"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)}>6</button>
      <button value="-"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)} >-</button>
    </div>
    <div className="button-row">
      <button value="1"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)}>1</button>
      <button value="2"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)} >2</button>
      <button value="3"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)} >3</button>
      <button value="+"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)} >+</button>
    </div>
    <div className="button-row">
      <button value="0"type="button" style={Styles} onClick={e=>setInput(input + e.target.value)}>0</button>
      <button type="button"style={Styles}  onClick={handleCalculate} >=</button>
    </div>
    </div>
  )
}