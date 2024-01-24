import './Appa.css';
import Navbar from './component/Navbar';
import TextForm from './TextForm';
//import Abourt from './component/Abourt';
import React, { useState } from 'react'
import Alert from './component/Alert';




 function App() {

    const [mode, setMode ] =  useState("light");
   const [ alert , setalert] = useState(null)

const showalert =(message, type)=>{
    setalert({
        message:message,
        type : type
    })
}


const rbc = ()=>{
document.body.classList.remove('bg-light')
//document.body.classList.remove('bg-')
document.body.classList.remove('bg-warning')
document.body.classList.remove('bg-dark')
document.body.classList.remove('bg-danger')
document.body.classList.remove('bg-success')


}



const togglemode = (cls) =>{
    rbc()
    console.log(cls)
 document.body.classList.add('bg-'+cls)
if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor = 'red';
    showalert("dark mode is enabled" , " success")
}
else{

    setMode("light");
    document.body.style.backgroundColor = 'white';
    showalert("light mode is enabled" , " success")

}
}


return(

<>

 <Navbar mode={mode}   togglemode={togglemode} />
 <Alert alert={alert}/>
<div className="container my-3">
       
      <TextForm showalert={showalert} heading="Enter the text anylaze below" mode={mode} />
        </div>

</>



);

}

export default App;

