import React from 'react';
import './Home.css'; // Import the CSS file
import Footer from './Footer'; // Import the Footer component
import logo from './logo.png'; // Update with the correct path to your image

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Yesp Invoice</h2>
      <h4>Launching on July 26, 2024</h4>
      <p>
        Yesp Invoice is designed to streamline your billing process with a user-friendly.</p>
       
   
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default Home;
