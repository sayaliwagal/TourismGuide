import React, {useState} from 'react'
import { useParams } from 'react-router'
import { destinations } from '../destinations.js';

const DestinationDetalis = () => {
    const {id} = useParams();
    console.log(id);
    const [tourismData, setTourismData] = useState(destinations);

    const data = tourismData.find((item) => {
        return item.id === id;
    })
    console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default DestinationDetalis
