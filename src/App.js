import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Textbar from "./components/Textbar";
import About from "./components/About";
import React,{useState} from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,type:type
    })
    setTimeout(()=>{
     setalert(null)
    },2000)

  }
  
  const[mode,setmode]=useState('dark');//tells if dark mode is enables or not.
   function handleToggle(){
    if(mode=='dark'){
    setmode('light');
  showalert("dark mode enabled",'success');
document.title='TEXTUTILS-DARK MODE';}
    else{setmode('dark');
    console.log(mode)
    showalert("dark mode disabled",'success')
    document.title='TEXTUTILS-LIGHT MODE';

    }
    
  }
 
  return (<>
  
   <div className={`App-${mode}`}>
 <Navbar title="testimony" mode={mode} handletoggle={handleToggle}/>
<Alert alert={alert}/>
   <Textbar showalert={showalert} heading="HEADING"/>
     <About name="babua" />

 {/* <Switch>
          <Route path="/about">
            <About name="babua" />
          
          </Route>
          <Route path="/">
           <Textbar showalert={showalert} heading="HEADING"/>
          </Route>
        </Switch> */}


    </div>
  </>);
  
}

export default App;
