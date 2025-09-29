import React from 'react'

const TourismCard = ({tourism}) => {
    const {name} = tourism;
  return (
    <div className='tourism-card'>
        <h1>Name:{name}</h1>
        <button className="explore-btn">Explore</button>
    </div>
  )
}

export default TourismCard
