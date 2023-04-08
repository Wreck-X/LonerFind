import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import React, {useEffect, useState} from "react";
import L from 'leaflet';
import SlidePanel from './slidingpanel';
import Panel   from './panel';

const LocationFinderDummy = () => {
  const map = useMapEvents({
      click(e) {
          console.log(e.latlng);
      },
  });
  return null;
};


function Map() {
    const [location, setLocation] = useState({ lat: 9.102308613438732, lng: 76.49512052536011 });

    useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
    iconUrl: require('./pngegg.png'),
    iconRetinaUrl: require('./pngegg.png'),
    iconSize: new L.Point(30, 50),
    shadowUrl: null,
    shadowSize: new L.point(30,50),
    shadowAnchor: null,
    });

  return (
    <div>
    <SlidePanel/>
    <Panel/>
    <MapContainer style={{ height: "100vh", minHeight: "100%" }} center={[location.lat,location.lng]} zoom={13} minZoom={3} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[location.lat,location.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[location.lat+0.0,location.lng+0.01]} draggable={true}>
        <Popup>
          Soemthing
        </Popup>
      </Marker>
      <LocationFinderDummy/>
    </MapContainer> 
    </div>
  );
}

export default Map;