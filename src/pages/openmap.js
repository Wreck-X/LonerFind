import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import React, {useEffect, useState} from "react";
import L from 'leaflet';
function Map() {
    const [location, setLocation] = useState({ lat: 0, lng: 0 });

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
    <MapContainer center={[location.lat,location.lng]} zoom={13} minZoom={3} scrollWheelZoom={true} style={{ height: '150vh'}}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[location.lat,location.lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;