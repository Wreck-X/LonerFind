import 'leaflet/dist/leaflet.css'
import React, {useState} from 'react'
import {Routes, Route, useNavigate, Router} from 'react-router-dom';
import Map from './pages/mainpages/map';
import './App.css';

import Landingpage from './pages/mainpages/landingpage';
import Login from './pages/mainpages/login';
function App() {
  const [token,setToken] = useState(null)
  const [username, setUsername] = useState('');
  return (
  <Routes>
    <Route path = '/' element={<Landingpage/>}/>
    <Route path='/map' element={<Map token={token} username={username}/>}/>
    <Route path='/login' element={<Login setToken={setToken} setUsername={setUsername}/>}/>
  </Routes>
);
}

export default App;
