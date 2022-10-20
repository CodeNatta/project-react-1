import React, {useState} from 'react'

export default function About() {

    const [btnStyle, setBtnStyle] = useState("Enable dark Mode")
    const [myStyles, setMyStyles] = useState({
        color:'Black',
        backgroundColor:'White'
    }
    )
    const toggleStyle= ()=>{
        if( myStyles.color==='black'){
            setMyStyles(
                {
                    color:'white',
                    backgroundColor:'black'
                }
            )
            setBtnStyle("Enable light Mode")
        }
        else{
            setMyStyles(
                {
                    color:'black',
                    backgroundColor:'white'
                }
            )
            setBtnStyle("Enable dark Mode")
        }
    }
    
    
  return (
    <div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyles}>
        Character CHECKER
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" style={myStyles}>
      <div className="accordion-body">
        <strong>This is the Dev Project.</strong> The Name DevTice Stands for Development and Practice!!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyles}>
        Calculator
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo" style={myStyles}>
      <div className="accordion-body">
        <strong>This is the Dev Project</strong> The Name DevTice Stands for Development and Practice!!
      </div>
    </div>
  </div>
</div>
<div className="container my-2">
<button onClick={toggleStyle} type="button" className="btn btn-dark">{btnStyle}</button>
</div>
    </div>
  )
}
