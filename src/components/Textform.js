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
  const clearText=()=>{
    console.log('Text is cleared')
    let cleart=''
    setText(cleart)
  }

  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);

    setText(newText.join(" "))
  }

  const handleCopy=()=>{
    console.log("Copy btn clicked")
    var text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const freqWord=()=>{
    let str=text
    let words = str.match(/\w+/g);
  console.log(words); // [ 'How', 'do', 'you', 'do' ]

  let occurances = {};

  for (let word of words) {
    if (occurances[word]) {
      occurances[word]++;
    } else {
      occurances[word] = 1;
    }
  }

  console.log(occurances); // { How: 1, do: 2, you: 1 }

  let max = 0;
  let mostRepeatedWord = '';

  for (let word of words) {
    if (occurances[word] > max) {
      max = occurances[word];
      mostRepeatedWord = word;
    }
  }

  setText(mostRepeatedWord)
  }
  const dark=()=>{
    var element=document.body
    element.classList.toggle("dark-mode")
  }
  const email=()=>{
     setText(text)
  }
  const copy=()=>{
    var copyText=text
    copyText.select();
  copyText.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: "+copyText.value)
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
  
  <button className='btn btn-primary mx-1' onClick={handleDownClick}
  >Convert to Lowercase</button>
  <button type="button" class="btn btn-danger mx-1" onClick={clearText}>Clear Text</button>
  <button type="button" class="btn btn-danger mx-1" onClick={freqWord}>Most frequent word</button>
  <button type="button" class="btn btn-primary mx-1" onClick={email}>Email extractor</button>
  <button type="button" class="btn btn-primary mx-1" onClick={handleCopy}>Copy to clipboard</button>
  <button type="button" class="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-2">
    <h1>Your text summary</h1>
    <p>words {text.split(" ").length} and {text.length} characters</p>
    <p>{0.008*text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    <button type="button" class="btn btn-dark" onClick={dark}>Dark Mode</button>
    
    </div>
    </>
  )
}
