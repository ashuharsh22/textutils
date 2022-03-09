import React, {useState} from 'react'

export default function TextForm(props)
{
  const handleUpClick=()=>{
    console.log('Uppercase was clicked')
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleDownClick=()=>{
    console.log('Lowercase was clicked')
    let downlo=text.toLowerCase();
    setText(downlo)
  }
  const handleOnChange=(event)=>{
    console.log('On change')
    setText(event.target.value)
  }
  const [text,setText]=useState('Enter text here')
  return (
    <>
    <div className='container'>
  <div class="mb-3">
  <label for="myBox" class="form-label">Text Box</label>
  <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8" value={text}>
  </textarea>
  </div> 
  <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
  
  <button className='btn btn-primary mx-1' onClick={handleDownClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-2">
    <h1>Your text summary</h1>
    <p>words {text.split(" ").length} and {text.length} characters</p>
    <p>{0.008*text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
