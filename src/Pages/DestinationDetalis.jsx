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
  return (
    <div className='home'>
    {!data ? (
      <div className="not-found">
        <h2>⚠️ Data not found</h2>
        <p>Please try again after sometime...</p>
      </div>
    ) : (
      <div className="city-card">
        <h1 className="city-title">City: <span>{data.name}</span></h1>
        <p><strong>Description:</strong> {data.description}</p>
        <p><strong>Tip:</strong> {data.tips}</p>
      </div>
    )}
  </div>
  )
}

export default DestinationDetalis
