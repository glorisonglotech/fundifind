import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Index from './pages/Index'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/h' element={<Home/>}/>
        <Route path='/' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App