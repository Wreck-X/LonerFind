
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup ,useMapEvents, useMap} from 'react-leaflet';
import React, {useEffect, useState} from "react";
import L from 'leaflet';
import SlidePanel from '../components/slidingpanel';
import Panel   from '../components/panel';
import { Foodicon,Sporticon,Shoppingicon } from '../icons';
import { fetchMapData  } from '../services/loadmarkers';
import { sendmarker } from '../services/sendmarker';
let obj;
function Map({token,username}) {
  const [location, setLocation] = useState({ lat: 9.102308613438732, lng: 76.49512052536011 });
  const [markerPosition  , setMarkerPositions] = useState({lat:1000,lng:1000})
  const [recievedPositions, setRecievedPositions] = useState([])
  const [booleanforcentermarker, setcentermarker] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const [menuX, setMenuX] = useState(0);
  const [menuY, setMenuY] = useState(0);
  const [eventdetails, seteventdetails] = useState(null);
  const [eventname,seteventname] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isShown,setisShown] = useState(false);
  const [lat,setlat] = useState();
  const [long,setlong] = useState();
  const [data,setdata] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMapData();
        setdata(data);
        setRecievedPositions(data);
        console.log(recievedPositions);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  function LocationFinderDummy ({handleClick,togglePanel}) {   
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
  
  const handleChangname = event => {
    seteventname(event.target.value);

    console.log('value is:', event.target.value);
  };
  const handleChangedetail = event => {
    seteventdetails(event.target.value);

    console.log('value is:', event.target.value);
  };
  
  

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
    iconUrl: require('../assets/blue.png'),
    iconRetinaUrl: require('../assets/blue.png'),
    iconSize: new L.Point(30,70),
    shadowUrl: null,
    shadowSize: new L.point(30,50),
    shadowAnchor: null,
    });

    function filterfood() {
      var foodlist = []
      for (var i in data) {
        if (data[i].tag === 'food') {
          foodlist.push(data[i])
        }
      console.log('filetered')
      setRecievedPositions(foodlist)
      }
    }
    function filtershopping() {
      var foodlist = []
      for (var i in data) {
        if (data[i].tag === 'shopping') {
          foodlist.push(data[i])
        }
      console.log('filetered')
      setRecievedPositions(foodlist)
      }
    }
    function filtersport() {
      var foodlist = []
      for (var i in data) {
        if (data[i].tag === 'sport') {
          foodlist.push(data[i])
        }
      console.log('filetered')
      setRecievedPositions(foodlist)
      }
    }

    function Markeronclick () {
          useMapEvents({
      click(e) {
        setShowMenu(false)
        if (e.originalEvent.button === 0 && e.originalEvent.ctrlKey === true) {
          var postcontent = e.latlng
          
          setMenuX(e.containerPoint.x);
          setMenuY(e.containerPoint.y);
          setShowMenu(true);
          setMarkerPositions(e.latlng)
          setlat(postcontent.lat);
          setlong(postcontent.lng);
          }
        },
      });
      return(
      <>
      <Marker  position={markerPosition} draggable={true}></Marker>
      </>
      )
    }


const togglePanel = () => {
  setIsOpen(!isOpen);
  setisShown(!isShown);
};
  return (
    <div >
    <div>Ctrl+left click to add an event</div>
    <div className='okipullupalign' onClick={togglePanel}>
      <div className='okipullup'></div>
    </div>
      {showMenu && (
        <div className="context-menu" style={{left: menuX,top: menuY}}>
          <div className='context-menu-body'>
            <div>
              <label >Enter event name:</label>
              <input  className='context-menu-input' placeholder='Event name' onChange={handleChangname}></input>
              <label >Enter event details:</label>
              <input  className='context-menu-input' placeholder='Event details' onChange={handleChangedetail}></input>
            </div>
            <div className='context-menubuttons'>
              <div className='context-menu-item' id ='food' onClick={() => sendmarker(lat,long,'food',eventdetails,eventname).then(setShowMenu(false))}>Food</div>
              <div className='context-menu-item' id ='sport' onClick={() => sendmarker(lat,long,'sport',eventdetails,eventname).then(setShowMenu(false))}>Sports</div>
              <div className='context-menu-item' id ='shopping' onClick={() => sendmarker(lat,long,'shopping',eventdetails,eventname).then(setShowMenu(false))}>Shopping</div>
            </div>
            <div className='buttonalign'>
            </div>
          </div>
        </div>
      )}
    <SlidePanel handleClick={handleClick} togglePanel={togglePanel} isOpen={isOpen} isShown={isShown}/>
    <Panel filterfood={filterfood} filtershopping={filtershopping} filtersport={filtersport} filer/>
    <MapContainer style={{ height: "100vh", minHeight: "100%" }} center={[location.lat,location.lng]} zoom={13} minZoom={3} scrollWheelZoom={true}>

    {Object.keys(recievedPositions).map((keys,index) => {
      console.log(recievedPositions[keys].tag)
      switch(recievedPositions[keys].tag){
        case ('food'):
      return (
        <Marker key={index} position={[recievedPositions[keys].lat,recievedPositions[keys].lng]} icon={Foodicon}>
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
      case('shopping'):
      return (
        <Marker key={index} position={[recievedPositions[keys].lat,recievedPositions[keys].lng]} icon={Shoppingicon}>
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
      case('sport'):
      return(
        <Marker key={index} position={[recievedPositions[keys].lat,recievedPositions[keys].lng]} icon={Sporticon}>
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
      default:
        return(
          <></>
        )
    }
  }
    )}
      <Markeronclick/>
      <LocationFinderDummy/>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer> 
    </div>
  );
}

export default Map;