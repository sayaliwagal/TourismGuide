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
    console.log(data)
    if(!data){
      return (<h1>Data not found please try after sometime...</h1>)
    }
  return (
    <div>
      <h1><label>City:-</label>{data.name}</h1>
      <p><label>Description:-</label>{data.description}</p>
      <p><label>Tip:-</label>{data.tips}</p>
    </div>
  )
}

export default DestinationDetalis
