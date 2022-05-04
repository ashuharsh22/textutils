import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

 
function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils - Dark mode enabled"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title="TextUtils - Light mode enabled"
    }
  }
return (
    <>
<Router>
<Navbar title="TitleUtils" mode={mode} toggleMode={toggleMode} /> 
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          </Route>
</Routes>
<About />
</div>
</Router>
</>
);
}
export default App;
