import 'leaflet/dist/leaflet.css'

import {Routes, Route, useNavigate, Router} from 'react-router-dom';
import Map from './pages/mainpages/map';
import './App.css';

import Landingpage from './pages/mainpages/landingpage';
import Login from './pages/login';
function App() {
  return (
  <Routes>
    <Route path = '/' element={<Landingpage/>}/>
    <Route path='/map' element={<Map/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
);
}

export default App;
