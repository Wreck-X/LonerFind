import 'leaflet/dist/leaflet.css'
import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import Map from './pages/map';
import './App.css';
import Landingpage from './pages/landingpage';
import Login from './pages/login';
import Registration from './pages/registration';
function App() {
  const [token,setToken] = useState(null)
  const [username, setUsername] = useState('');
  return (
  <Routes>
    <Route path = '/' element={<Landingpage/>}/>
    <Route path='/map' element={<Map token={token} username={username}/>}/>
    <Route path='/login' element={<Login setToken={setToken} setUsername={setUsername}/>}/>
    <Route path='/registration' element={<Registration/>}/>
  </Routes>
);
}

export default App;
