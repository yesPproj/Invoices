import React from 'react';
import './Carousel.css'; // Import the CSS file for carousel styling

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-slide">
        <h3>Seamless Invoicing</h3>
        <p>Effortlessly create and manage your invoices from anywhere.</p>
      </div>
      <div className="carousel-slide">
        <h3>Advanced Features</h3>
        <p>Automated tax calculations, recurring invoices, and more.</p>
      </div>
      <div className="carousel-slide">
        <h3>Secure Data</h3>
        <p>Your data is safely stored in the cloud with top-notch security.</p>
      </div>
    </div>
  );
};

export default Carousel;
