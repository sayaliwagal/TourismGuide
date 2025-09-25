import React, { useState } from 'react'
import { destinations } from "../destinations.js";
import TourismCard from '../Components/TourismCard.jsx';
import {Link} from 'react-router'

const Destinations = () => {
    const [tourismData, setTourismData] = useState(destinations);
  return (
    <div>
        {tourismData.map((item, id) => {
            return (
                <Link to={`/destinations/${item.id}`} key={item.id} >
                <TourismCard tourism = {item} key={id}/>
                </Link>

            )
        })}
    </div>
  )
}

export default Destinations
