import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Index from './pages/Index'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import FundiDashboard from './pages/dashboard/fundi/FundiDashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/h' element={<Index/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/' element={<FundiDashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App