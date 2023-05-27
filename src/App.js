import 'leaflet/dist/leaflet.css'
import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import Map from './Pages/map';
import './App.css';
import Landingpage from './Pages/landingpage';
import Login from './Pages/login';
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
