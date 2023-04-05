import 'leaflet/dist/leaflet.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Routes, Route, useNavigate, Router} from 'react-router-dom';
import Map from './pages/openmap';
import './App.css';
import Secpage from './pages/secpage';
function App() {
  return (
    <div className="App">
    <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
      <ParallaxLayer offset={0} speed={0.4}>
        <div class="animation_layer parallax" id="back"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div class="animation_layer parallax" id="three"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2}>
        <div class="animation_layer parallax" id="two"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <div class="animation_layer parallax" id="one"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1}>
        <Secpage/>
      </ParallaxLayer>
    </Parallax>
    <Routes>
            <Route path='/map' element={<Map/>}/>
    </Routes>
  </div>
);
}

export default App;
