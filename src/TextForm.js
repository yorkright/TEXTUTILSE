import React, {useState} from 'react'




export default function TextForm(props) {


const handleUpClick = ()=>{
  console.log("uppercase was clicked" + text);
  let newtext = text.toUpperCase();
  setext(newtext)
}




const handleLoClick = ()=>{
  let newtext = text.toLowerCase();
  setext(newtext)
}


const handleClearClick = ()=>{
  let newtext = "";
  setext(newtext)
}


const handleOnChange = (event)=>{
  console.log("on change");
  setext(event.target.value)
}


const handlecopy = () =>{
console.log("I am copy ")
var text = document.getElementById("mybox")
text.select();
navigator.clipboard.writeText(text.value);
}


const handleextraspace = () => {
let newText =  text.split(/[ ]+/);
setext(newText.join(" "))
}



const [text,setext ] = useState('')


// setext('new text');

  return (
    <>
    <div  className='container my-5  '   style={{colors:props.mode==='dark'?'white':'#042743   '}}>
      <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundcolors: props.mode==='dark'?'grey':'white',  colors: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
    </div>
   <button className="btn btn-primary  mx-1" onClick={handleUpClick} >convert to uppercase</button>
   <button className="btn btn-primary mx-1" onClick={handleLoClick} >convert to lowercase</button>
   <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear text</button>
   <button className="btn btn-primary mx-1" onClick={handlecopy} >Copy text</button>
   <button className="btn btn-primary mx-1" onClick={handleextraspace} >Remove the extra space</button>



     


        </div>
        
        <div className="container"  style={{colors:props.mode==='dark'?'white':'#042743'}}>
        <h1> your text summary  </h1>
   <p>{text.split("").length} words and {text.length} charecters   </p>
   <p> { 0.008 * text.split("").length}  minute read    </p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"ENTER SOME TEXT TO PREVIEW"}</p>
          </div>
 
 
 
 
          <button type="button" class="btn btn-primary position-relative">
  Profile
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>
 
 
 
 
 
 
 
 
 
 
 
   </> 
  )
}
 