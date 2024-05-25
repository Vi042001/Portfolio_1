
import React from 'react';
import '../project/carrental.css';

const CarRental = () => {
  return (
    <div className="portfolio-section">
         <div className="project-name">
         <h1>Project</h1>
         </div>
         <div className="content">
      <div className="image-container">
        <img src="car-image.png" alt="Car Rental" className="car-image" />
      </div>
      <div className="text-container">
        <h2>CAR RENTAL 🚗</h2>
        <p>
          A car rental website is an online platform that allows users to rent cars for personal or business use.
          The website provides an interface for searching, comparing, and reserving cars.
        </p>
        <p>React | SCSS</p>
        <div className="links">
          <a href="https://github.com/Vi042001/car_rental.git" target="_blank" rel="noopener noreferrer">Code</a>
          <a href="https://live-demo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CarRental;
