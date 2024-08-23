import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css'

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div>
        <Header />
        <div style={{ padding: '20px', flexGrow: 1 }}>
          <div style={{ display: 'flex' }}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
