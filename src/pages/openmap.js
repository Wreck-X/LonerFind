
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup ,useMapEvents, useMap} from 'react-leaflet';
import React, {useEffect, useState} from "react";
import L from 'leaflet';
import SlidePanel from './slidingpanel';
import Panel   from './panel';
import axios from 'axios';
function Map() {
  const [location, setLocation] = useState({ lat: 9.102308613438732, lng: 76.49512052536011 });
  const [markerPositions, setMarkerPositions] = useState([])
  const [recievedPositions, setRecievedPositions] = useState([])
  const [booleanforcentermarker, setcentermarker] = useState(false)
  function LocationFinderDummy ({handleClick}) {   
      var map = useMap()
      var center = map.getCenter()
      if (booleanforcentermarker){
      return (
        <>
            <Marker position={center} draggable={true}/>
        </>
      );
      }
  };

  function Markeronclick () {
           useMapEvents({
        click(e) {
          console.log(e.latlng)
          const newMarkerPosition = e.latlng; 
          setMarkerPositions((prevPositions) => [...prevPositions, newMarkerPosition]);
            //send marker position to backend somehow
        },
      });
      return(
      <>
      {markerPositions.map((markerPosition,index) => <Marker key={index} position={markerPosition} draggable={true}></Marker>)}
      </>
      )
  }
  
  const loadMarkers = (e) => {
  axios.get('https://django.biscuitbobby.me/loc/')
  .then(response => {
    const obj = JSON.parse(response.data)
    const newPostitions = []
    for (var key in obj) {
      newPostitions.push({lat:obj[key].lat,lng:obj[key].lng})
    }
    setRecievedPositions(newPostitions)
  })
  .catch(error => {
    console.log(error);
  });
  }

  const handleClick = (e) => {
    e.stopPropagation()
    setcentermarker(true)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  },[]);

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
    <SlidePanel handleClick={handleClick}/>
    <Panel/>
    <MapContainer style={{ height: "100vh", minHeight: "100%" }} center={[location.lat,location.lng]} zoom={13} minZoom={3} scrollWheelZoom={true} whenReady={loadMarkers}>
    {console.log(recievedPositions)}
    {recievedPositions.map((position, index) => (
        <Marker key={index} position={[position.lat, position.lng]}>
          <Popup>
            <span>Marker {index + 1}</span>
          </Popup>
        </Marker>
      ))}
      <Markeronclick/>
      <LocationFinderDummy/>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer> 
    </div>
  );
}




export default Map;