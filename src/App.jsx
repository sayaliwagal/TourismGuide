import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './Components/Header'
import Home from './Pages/Home'
import Destinations from './Pages/Destinations'
import DestinationDetalis from './Pages/DestinationDetalis'
import PlanTrip from './Pages/PlanTrip'
import DynamicTitle from './Pages/DynamicTitle'
import Error from './Pages/Error'
import './App.css'
const App = () => {
  return (
    <div>
       <BrowserRouter>
       <DynamicTitle/>
       <Header/>
    <Routes>
      <Route path='/' element = { <Home />}/>
      <Route path='/destinations' element= {<Destinations/>}/>
      <Route path='/destinations/:id' element= {<DestinationDetalis/>}/>
      <Route path='/plan-trip' element={<PlanTrip/>}/>
      <Route path='/*' element={<Error />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
