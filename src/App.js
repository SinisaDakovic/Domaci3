import React from 'react'
import Login from './components/Login/Login'
import {Routes, Route} from "react-router-dom"

import Home from './components/Home/Home'



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home/*" element={<Home/>}>
          
      </Route>
    </Routes>
    </>
  );
}

export default App;
