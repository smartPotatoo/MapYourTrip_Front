import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent';
import MapYourTripProvider from './provider/MapYourTripProvider';

const App = () => (
  <MapYourTripProvider>
    <Router>
      <AppContent />
    </Router>
  </MapYourTripProvider>
  
);

export default App;
