import React, { useState } from 'react'
import { destinations } from '../destinations';

const PlanTrip = () => {
    const [userName, setUserName ] = useState("");
    const [selectedDestination, setSelectedDestination] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!userName && !selectedDestination){
            alert("Please fill in all fields");
            return;
        }
        alert(`Trip Planned for ${userName} to ${selectedDestination}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nameText">Name :-</label>
                <input type="text" name="name" id="nameText" value={userName} onChange={(e) => {setUserName(e.target.value) }} />
            </div>
             <div>
                <label htmlFor="selection">Selete Destination :-</label>
                <select name="name" id="selection" value={selectedDestination} onChange={(e) => {setSelectedDestination(e.target.value)}}>
                    {destinations.map((item) =>{
                        return (<option value={item.id} key={item.id}>{item.name}</option>)
                    })}
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default PlanTrip
