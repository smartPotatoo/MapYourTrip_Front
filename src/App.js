import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent';
import './App.css';

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
