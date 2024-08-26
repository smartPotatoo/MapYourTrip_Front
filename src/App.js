import React from 'react';
import MapComponent from './MapComponent';
import './App.css'
import { NavermapsProvider } from 'react-naver-maps';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent';

const App = () => {
  return (
    <div>
      <Router>
        <AppContent />
        <NavermapsProvider ncpClientId='t1th1qwp3v'>
          <MapComponent />
        </NavermapsProvider>
      </Router>
    </div>
  );
};

export default App;
