import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import About from './Components/About/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="519317591544-ei40cvgqfrqdka5fa2bk9f5m7e1lq30g.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
