
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup ,useMapEvents, useMap} from 'react-leaflet';
import React, {useEffect, useState} from "react";
import L from 'leaflet';
import SlidePanel from './slidingpanel';
import Panel   from './panel';
import axios from 'axios';
import { keys } from '@mui/system';
function Map() {
  const [location, setLocation] = useState({ lat: 9.102308613438732, lng: 76.49512052536011 });
  const [markerPosition  , setMarkerPositions] = useState({lat:0,lng:0})
  const [recievedPositions, setRecievedPositions] = useState([])
  const [booleanforcentermarker, setcentermarker] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const [menuX, setMenuX] = useState(0);
  const [menuY, setMenuY] = useState(0);
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
          console.log(e)
          console.log(e.originalEvent.button)
          if (e.originalEvent.button == 0 && e.originalEvent.ctrlKey == true) {
            var postcontent = e.latlng
            setMarkerPositions(e.latlng)
            console.log(postcontent)
            const config = {
              headers: {
                lat:postcontent.lat,
                long:postcontent.lng,
              }
            }
            axios.post('https://django.biscuitbobby.me/eventupdate/',{},config).then(response =>  {
              console.log(response.data)
            })
            .catch(error => {console.error(error)});
          }
 
        },
      });
      return(
      <>
      <Marker  position={markerPosition} draggable={true}></Marker>
      </>
      )
  }
  
  const loadMarkers = (e) => {
  axios.get('https://django.biscuitbobby.me/loc/')
  .then(response => {
    const obj = JSON.parse(response.data)
    const newPostitions = []
    var eventdetails = []
    // for (var key in obj) {
    //   newPostitions.push({lat:obj[key].lat,lng:obj[key].lng})
    // }
    setRecievedPositions(obj)
    console.log(obj)
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

  function handleContextmenu(e) {
    e.preventDefault();
    setShowMenu(true);
    setMenuX(e.clientX);
    setMenuY(e.clientY);
  }

    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
    iconUrl: require('./pngegg.png'),
    iconRetinaUrl: require('./pngegg.png'),
    iconSize: new L.Point(30,70),
    shadowUrl: null,
    shadowSize: new L.point(30,50),
    shadowAnchor: null,
    });

  return (
    <div onContextMenu={handleContextmenu}>
    <SlidePanel handleClick={handleClick}/>
    <Panel/>
    <MapContainer style={{ height: "100vh", minHeight: "100%" }} center={[location.lat,location.lng]} zoom={13} minZoom={3} scrollWheelZoom={true} whenReady={loadMarkers}>

    {Object.keys(recievedPositions).map((keys,index) => {
      return (
        <Marker position={[recievedPositions[keys].lat,recievedPositions[keys].lng]}>
          <Popup>
            <div>
              <div className='eventTitle'>{recievedPositions[keys].event_name}</div>
              <div className='eventDescription'>{recievedPositions[keys].event_description}</div>
              <div className='eventButtonFlex'>
                <div className='eventButton'>View</div>
              </div>
            </div>
          </Popup>
        </Marker>
      )
    })}
      <Markeronclick/>
      <LocationFinderDummy/>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer> 
    </div>
  );
}

export default Map;