import React ,{ useState,useEffect } from 'react'

// css import
import './App.css'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";

// components import
// import Preloader from './components/pre'
import NavBar from './components/navbar'
import Home from "./components/home/home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    {/* <Preloader load={load}/> */}
      <div>
        <NavBar/> 
        <Home/>
      </div>
     
      
      
    </>
  )
}

export default App
