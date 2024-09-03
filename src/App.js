import React from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App