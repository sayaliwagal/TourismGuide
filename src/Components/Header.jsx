import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div>
        <ul className='navBar'>
            <li><NavLink to= {`/`}>Home</NavLink></li>
            <li><NavLink to= {'/destinations'}>Destination</NavLink></li>
            <li><NavLink to = {'/plan-trip'}>Plan Trip</NavLink></li>
        </ul>
      
    </div>
  )
}

export default Header
