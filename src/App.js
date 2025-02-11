
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";



function App() {
  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}


  const toggleMode =()=>{
  if(mode  === 'light'){
     setMode('dark');
     document.body.style.backgroundColor="#042743";
     showAlert("Dark mode has been enabled", " success");
     document.title='Textutils-Dark Mode';
    //  setInterval(()=>{
    //    document.title = 'TextUtils is Amazing Mode';
    //  }, 2000);
    //  setInterval(()=>{
    //    document.title = 'Install TextUtils';
    //  },1500);
  }else{
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled", " success");
    document.title='Textutils-light Mode';
  }
  }


  return (

    <>
    {/* <Router> */}
   
     
    <Navbar title="Textutils"   aboutText="About us" mode={mode} toggleMode= {toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    
            {/* <Routes>   */}
         
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /*/}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            {/* </Routes> */}
              </div>
             
            {/* </Router> */}
           
          
        
    
    </>
  );
}

export default App;

// React does practial matching  --- is liye hamesha provide exact path
// 
//          /user --------> Component  1
//          /user/home--------> Component  2