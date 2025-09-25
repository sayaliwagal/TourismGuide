import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {BrowserRouter, Routes, Route} from 'react-router';
import Home from './Pages/Home.jsx';
import Destinations from './Pages/Destinations.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
   
      <Route path='/' element = { <Home />}/>
      <Route path='/destinations' element= {<Destinations/>}/>
      <Route/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
