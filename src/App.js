import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Beta from './components/Beta';
import Features from './components/Features';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'beta':
        return <Beta />;
      case 'features':
        return <Features />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
}

export default App;
