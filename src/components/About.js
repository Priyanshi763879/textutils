import React, { useState } from 'react'

export default function About() {
 

  const[mystyle , setMyStyle] = usestate({
    color: 'black',
    backgroundColor: 'white'
  })
  const [btntext , setBtnText] = useState("Enanle Dark Mode")

  const toggleStyle=()=>{
    if(my.Style.color ==='black'){
      setMyStyle({
        color:white,
        backgroundColor: 'black',
        boreder: '1px solid white'
      })
      setBtnText("Enable light mode")
    }else{
      setMyStyle({
        color:'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode")
    }
  }
   

  return (
    <div className='conatiner' style ={mystyle}>
      <h1  className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle} >
              Textutils gives you a way to analyze your text quickly and 
              efficiently. Be it word count, character count or

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle} >
              Textutils is a free character counter tool that provides instant character count &  word count statistics for a given text.

            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed"  style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle} >
              This word counter software works in any browser such as chrome, Firefox,safari etc.

            </div>
          </div>
        </div>
      </div>
      <div> 
        <button  onClick={toggleStyle} type = "button " className='btn btn-primary' >{btnText}</button>
       </div>
    </div>
  )
}
