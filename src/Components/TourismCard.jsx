import React from 'react'

const TourismCard = ({tourism}) => {
    const {name,description,tips } = tourism;
  return (
    <div>
        <h1>Name:{name}</h1>
    </div>
  )
}

export default TourismCard
