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
    <div className="form-container">
        <h1>Travel Plan</h1>
  <form onSubmit={handleSubmit} className="form-card">
    <div className="form-group">
      <label htmlFor="nameText">Name:</label>
      <input
        type="text"
        name="name"
        id="nameText"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label htmlFor="selection">Select Destination:</label>
      <select
        name="destination"
        id="selection"
        value={selectedDestination}
        onChange={(e) => setSelectedDestination(e.target.value)}
      >
        {destinations.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>

    <button type="submit" className="submit-btn">Submit</button>
  </form>
</div>
  )
}

export default PlanTrip
