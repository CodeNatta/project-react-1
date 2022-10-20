import { useState } from 'react';
import './App.css'
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Calculations from './Components/Calculations';
import Home from './Components/Home'
import Footer from './Components/Footer';

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
        showAlert("Light Mode activated","success");
        document.title='Light Mode'
        setInterval(()=>{ document.title='Install now'
      },2000)
        
    }
    else{
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode activated","success")
  }
}
  return (
    <>
    <Router>
      <Navbar title= "DevTice" aboutUs="About us" calculation="Basic Calculator" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path='/' element={<Home mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
          <Route path ="/charcheck" element={<TextForm showAlert={showAlert} heading="Enter your text Here to check words" mode={mode}/>}></Route>
          <Route path='/calculator' element={<Calculations showAlert={showAlert} heading="Calculator" mode={mode}/>}/>
        </Routes>
      </div>
      <Footer mode={mode}/>
      </Router>
      </>
  );
}

export default App;
