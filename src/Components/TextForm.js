import React, { useState }from 'react'
export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("Upper case was click")
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Upper Case","success")
    }
    const handleLowClick= ()=>{
        console.log("Upper case was click")
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Lower Case","success")
    }
    const handleOnChange= (event)=>{
        console.log("On change was clicked")
        setText(event.target.value)
    }
    const handleTitleClick= (event)=>{
        console.log("Title")
        let newText= text.charAt(0).toUpperCase() +text.slice(1) ;
        setText(newText)
        props.showAlert("Title Case","success")
    }
    const handleInverseClick= (event)=>{
        console.log("Title")
        let newText= text.charAt(0).toLowerCase()+text.slice(1).toUpperCase();
        setText(newText)
        props.showAlert("Inverse Case","success")
    }
    const handleCopyClick=(event)=>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!","success")
    }
    const handleClearClick= (event)=>{
        console.log("Clear clicked")
        let newText=''
        setText(newText)
        props.showAlert("Text cleared","success")
        }
    const [text, setText]= useState("")
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
    <div className='mb-3'>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#042743':'#ffffff', color: props.mode==='dark'? 'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary my-1" onClick={handleUpClick }>Convert to Upper case</button>
    <button className="btn btn-primary  my-1 mx-1" onClick={handleLowClick }>Convert to Lower case</button>
    <button className="btn btn-primary  my-1 mx-1" onClick={handleTitleClick }>Title Case</button>
    <button className="btn btn-primary  my-1 mx-1" onClick={handleInverseClick}>Inverse Case</button>
    <button className="btn btn-primary  my-1 mx-1" onClick={handleCopyClick}>Copy text</button>
    <button className="btn btn-primary  my-1 mx-1" onClick={handleClearClick }>Clear</button>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </div>
    </>
    )
}
