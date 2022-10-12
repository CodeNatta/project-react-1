import { useState } from 'react';
import './App.css'
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null) //tell setAlert null after 3 seconds
    },3000)
  }

  const toggleMode =()=>{
    if(mode==='dark'){
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light Mode activated","success")
    }
    else{
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode activated","success")
  }
}
  return (
    <>
      <Navbar title= "Character Checker" aboutUs="About us" blog="Blogs" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter your text Here to check words" mode={mode}/>
        </div>
      </>
  );
}

export default App;
