import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent';

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
