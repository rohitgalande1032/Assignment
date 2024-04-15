import React from 'react';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import AdminPanel from './components/AdminPanel';

import './App.css';

// or less ideally
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1>Profile Viewer</h1>
      <div className="content">
        <ProfileList />
        <Map />
        <AdminPanel />
      </div>
    </div>

    
  );
}

export default App;
