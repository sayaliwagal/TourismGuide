import React, { useState } from 'react'
import { destinations } from "../destinations.js";
import TourismCard from '../Components/TourismCard.jsx';
import {Link} from 'react-router-dom'

const Destinations = () => {
    const [tourismData, setTourismData] = useState(destinations);
  return (
    <div className='destinations'>
      <h1 className='destinations-title'>Top Destinations</h1>
      <div className="destinations-grid">

        {tourismData.map((item, id) => {
          return (
            <Link to={`/destinations/${item.id}`} key={item.id} >
                <TourismCard tourism = {item}/>
                </Link>
            )
          })}
      </div>
    </div>
  );
};

export default Destinations
