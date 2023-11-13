import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/navbar/navbar';
import About from './pages/about/about';
import Certificates from './pages/certificates/certificates';
import Conatact from './pages/contact/contact';
import Fields from './pages/fields/fields';
import Home from './pages/home/home';
import Knowledge from './pages/knowledge_hub/knowledge_hub';
import Services from './pages/services/services';

import './App.css';

function App() {

  const [load, setLoad] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

useEffect(() => {

  setTimeout(()=>{
  setLoad(true)
  },1000)

  setTimeout(()=>{
  setLoad(false)
  },5000)

  setTimeout(()=>{
    setIsLoaded(true)
  },6000)
},[])


  return (
      <>
      <div className={`load ${isLoaded ? "open-website" : ""}`}>
        <div className={`images ${load ? "open" : "close"}`}>
          <img style={isLoaded ? {display: "none"} : {display: "inline"}} src='./assets/load/firoz White 2.png' alt='load' />
          <img style={isLoaded ? {display: "none"} : {display: "inline"}} src='./assets/load/firoz White 2 (1).png' alt='load' />
        </div>
        <div style={isLoaded ? {display: "none"} : {display: "block"}} class="loader"></div>
      </div>
      <div className='main-design position-relative'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/fields' element={<Fields/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/knowledge' element={<Knowledge/>}/>
          <Route path='/gallery' element={<Certificates/>}/>
          <Route path='/contact' element={<Conatact/>}/>
        </Routes>
      </div>
      
      </>
  );
}

export default App;
