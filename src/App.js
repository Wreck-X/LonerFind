import 'leaflet/dist/leaflet.css'

import {Routes, Route, useNavigate, Router} from 'react-router-dom';
import Map from './pages/openmap';
import './App.css';

import Landingpage from './pages/landingpage';
function App() {
  return (
  <Routes>
    <Route path = '/' element={<Landingpage/>}/>
    <Route path='/map' element={<Map/>}/>
  </Routes>
);
}

export default App;
