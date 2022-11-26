import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage/LoginPage'
import PrivateRoutes from './utils/PrivateRoutes'
import UserPages from './pages/UserPages/UserPages'
import {AuthProvider} from './context/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path = '/' element = {<LoginPage/>}/>
          <Route element = {<PrivateRoutes/>}>
            <Route path='/u/:username/*' element={<UserPages/>}/>
          </Route>
        </Routes>
      </AuthProvider>

    </>
  )
}

export default App