import React from 'react';
import './Features.css'; // Import the CSS file
import Footer from './Footer';

const featuresList = [
  { icon: 'fas fa-user-lock', text: 'User Authentication and Authorization' },
  { icon: 'fas fa-tachometer-alt', text: 'Dashboard Overview' },
  { icon: 'fas fa-file-invoice', text: 'Invoice Management' },
  { icon: 'fas fa-users', text: 'Customer Management' },
  { icon: 'fas fa-box', text: 'Product/Service Management' },

  { icon: 'fas fa-calculator', text: 'Tax Management' },
  { icon: 'fas fa-credit-card', text: 'Payment Tracking' },
  { icon: 'fas fa-chart-line', text: 'Reports and Analytics' },
  { icon: 'fas fa-cogs', text: 'Settings and Customization' },
  { icon: 'fas fa-bell', text: 'Notifications and Reminders' },
  { icon: 'fas fa-database', text: 'Data Backup and Security' },
  { icon: 'fas fa-mobile-alt', text: 'Mobile-Friendly Interface' },
  { icon: 'fas fa-plug', text: 'Integrations with Payment Gateways' }
];

const Features = () => {
  return (
    <div className="features-container">
      <h2>Features of YesP Invoice</h2>
      <ul className="features-list">
        {featuresList.map((feature, index) => (
          <li key={index} className="feature-item">
            <i className={feature.icon}></i>
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Features;
