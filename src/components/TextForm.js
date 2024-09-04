import React, {useState} from 'react'

export default function TextForm(props) {
   const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!", "success");
   }
   const handleLoClick=()=>{
    // console.log("Lowercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!", "success");
   }
   const handleClearClick=()=>{
    let newText = '';
    setText(newText)
    props.showAlert("claer text !", "success");
   }
   const handleCopy =()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied !", "success");
   }

   
   const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value)
    // props.showAlert("!", "success");
   }

   const handleExtraSpaces =()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("handle extra spaces!", "success");
   }

   const [text, setText] = useState('');
    // text = "new text";  // Wrong wya to change the state
    // setText("new text");  // correct way to change the state
   


  return (
    <>
    <div className="conatiner" style ={{color : props.mode === 'dark'?'white':'#03022f'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3"> 
      <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor : props.mode === 'dark'?'grey':'white',color: props.mode==='dark'?'white':'#03022f'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1 "  onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleCopy}>copy Text</button>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleExtraSpaces}>Remove Extra spaces Text</button>
    </div>
     <div className="container my-3" style={{color : props.mode === 'dark'?'white':'#03022f'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0.}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>{text.length>0?text:"Enter something in the textbox above to preview it here"}</h2>
      <p>{text}</p>
     </div>
    </>
  )
}
