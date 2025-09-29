import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
     <div className="home">
      <div className="home-content">
        <h1>
          Welcome to the <span>Tourism Guide!</span>
        </h1>
        <p>
          Discover amazing destinations, explore hidden gems, and plan your next
          unforgettable trip with us.
        </p>
        <Link to="/destinations"><button className="dexplore-btn">Start Exploring</button></Link>
      </div>
    </div>
  )
}

export default Home
