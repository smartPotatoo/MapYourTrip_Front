import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MapComponent from './MapComponent';
import './App.css'
import { NavermapsProvider } from 'react-naver-maps';


const App = () => {
  return (
    <div>
      <NavermapsProvider ncpClientId='t1th1qwp3v'>
        <MapComponent />
      </NavermapsProvider>
    </div>
  );
};


/*
const App = () => {
  return (
    <div>
      <NavermapsProvider ncpClientId='t1th1qwp3v'>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div>
            <Header />
            <div style={{ padding: '20px', flexGrow: 1 }}>
              <MapComponent />
            </div>
          </div>
        </div>
      </NavermapsProvider>
    </div>
  );
};
*/
export default App;
