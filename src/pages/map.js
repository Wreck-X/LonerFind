
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup ,useMapEvents} from 'react-leaflet';
import React, {useEffect, useState} from "react";
import L from 'leaflet';
import SlidePanel from '../components/slidingpanel';
import Panel   from '../components/panel';
import { filterall, filterfood,filtershopping,filtersport } from '../services/filters/filters';
import { Foodicon,Sporticon,Shoppingicon } from '../icons';
import { fetchMapData  } from '../services/api/loadmarkers';
import { sendmarker } from '../services/api/sendmarker';
import LocationFinderDummy from '../components/locationfinderdummy';
import Cookies from 'js-cookie';
import { deletemarker } from '../services/api/deletemarker';
import { joinevent } from '../services/api/join';
function Map({token,username}) {

  // useEffect(() => {
  //   console.log(Cookies.get('token'))
  //   if(Cookies.get('token') === undefined){
  //     console.log('lolna')
  //     window.location.href= '/login'
  //   }
  //     }, []);


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
  const [data,setdata] = useState();
  const [showmarker,setmarker] = useState(true);;
  const [eventtitle,seteventtitle] = useState('');

  const [markerLocation, setMarkerLocation] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMapData();
        setdata(data['data']);
        setRecievedPositions(data['data']);
        console.log(data['data'])
      } catch (error) {
        console.error(error);
      }
    };


    fetchData();
  }, []);
  useEffect(() => {
    if (!showmarker) {
      deletemarker(1,1,'food', eventdetails, eventname)
    }
  }, [showmarker]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  },[]);

  
  const handleChangname = event => {
    seteventname(event.target.value);
  };
  const handleChangedetail = event => {
    seteventdetails(event.target.value);
  };
  
  

  const handleClick = (e) => {
    e.stopPropagation()
    setcentermarker(true)
  }
  const handlePopupButtonClick = (latitude, longitude) => {
    const locationString = `Latitude: ${latitude}, Longitude: ${longitude}`;
    // Use the locationString as needed (e.g., copy to clipboard, share, etc.)
    console.log('Location:', locationString);
  };


    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
    iconUrl: require('../assets/blue.png'),
    iconRetinaUrl: require('../assets/blue.png'),
    iconSize: new L.Point(30,70),
    shadowUrl: null,
    shadowSize: new L.point(30,50),
    shadowAnchor: null,
    });



    function Markeronclick () {
          useMapEvents({
      click(e) {
        console.log(e)
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
    <div>
    <div>Ctrl+left click to add an event</div>
    <div className='okipullupalign' onClick={togglePanel}>
      <div className='okipullup'></div>
    </div>
      {showMenu && (
        <div className='align-context-menu'> 
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
        </div>

      )}
    <SlidePanel handleClick={handleClick} togglePanel={togglePanel} isOpen={isOpen} isShown={isShown}/>
    {data &&
    <Panel filterfood={() => {setRecievedPositions(filterfood(data))}} filtershopping={() => {setRecievedPositions(filtersport(data))}} filtersport={() => {setRecievedPositions(filtershopping(data))}} filterall={() => {setRecievedPositions(filterall(data))}}filer/>}
    <MapContainer style={{ height: "100vh", minHeight: "100%" }} center={[location.lat,location.lng]} zoom={13} minZoom={3} scrollWheelZoom={true}>
    <Marker position={[0,0]} icon={Foodicon}>
          <Popup>
            <div>
              <div className='eventTitle'>Party</div>
              <div className='eventDescription' >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
              <div className='eventButtonFlex'>
              <div className='eventButton'>Delete</div>
              <div className='eventButton' onClick={handlePopupButtonClick(0,0)}>Share</div>
              <div className='textevent'>0/10</div>
              </div>
            </div>
          </Popup>
        </Marker>
    {Object.keys(recievedPositions).map((keys,index) => {
      
      switch(recievedPositions[keys].tag){
        case ('food'):
          if (Cookies.get('username') == keys) {
            return (
            <>
            {showmarker && 
            <Marker key={index} position={[recievedPositions[keys].lat,recievedPositions[keys].lng]} icon={Foodicon}>
                <Popup>
                  <div>
                    <div className='eventTitle' >{recievedPositions[keys].event_name}</div>
                    <div className='eventDescription'>{recievedPositions[keys].event_description}</div>
                    <div className='eventButtonFlex'>
                    <div className='eventButton' onClick={()  => {setmarker(false)}}>Delete</div>
                    <div className='eventButton'onClick={() => {navigator.clipboard.writeText(`Latitude: ${recievedPositions[keys].lat}, Longitude: ${recievedPositions[keys].lng}`)}}>Share</div>
                    <div>0/10</div>
                    </div>
                  </div>
                </Popup>
              </Marker>}

            </>

            )
          } else {
            console.log(keys)
            return (
        
              <Marker key={index} position={[recievedPositions[keys].lat,recievedPositions[keys].lng]} icon={Foodicon}>
                <Popup>
                  <div>
                    <div className='eventTitle'>{recievedPositions[keys].event_name}</div>
                    <div className='eventDescription'>{recievedPositions[keys].event_description}</div>
                    <div className='eventButtonFlex'>
                    <div className='eventButton' onClick={() => {joinevent(keys)}}>Join</div>
                    <div>0/10</div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            )
          }

      case('shopping'):
      if (Cookies.get('username') == keys) {
        return (
    
          <>
          {showmarker && 
          <Marker key={index} position={[recievedPositions[keys].lat,recievedPositions[keys].lng]} icon={Shoppingicon}>
              <Popup>
                <div>
                  <div className='eventTitle' >{recievedPositions[keys].event_name}</div>
                  <div className='eventDescription'>{recievedPositions[keys].event_description}</div>
                  <div className='eventButtonFlex'>
                  <div className='eventButton' onClick={()  => {setmarker(false)}}>Delete</div>
                  <div className='eventButton'onClick={() => {navigator.clipboard.writeText(`Latitude: ${recievedPositions[keys].lat}, Longitude: ${recievedPositions[keys].lng}`)}}>Share</div>
                  <div>0/10</div>
                  </div>
                </div>
              </Popup>
            </Marker>}

          </>
        )
      } else {
        return (
    
          <Marker key={index} position={[recievedPositions[keys].lat,recievedPositions[keys].lng]} icon={Shoppingicon}>
            <Popup>
              <div>
                <div className='eventTitle'>{recievedPositions[keys].event_name}</div>
                <div className='eventDescription'>{recievedPositions[keys].event_description}</div>
                <div className='eventButtonFlex'>
                <div className='eventButton'>Join</div>
                <div>0/10</div>
                </div>
              </div>
            </Popup>
          </Marker>
        )
      }
      case('sport'):
      if (Cookies.get('username') == keys) {
        
        return (
    
          <>
          {showmarker && 
          <Marker key={index} position={[recievedPositions[keys].lat,recievedPositions[keys].lng]} icon={Sporticon}>
              <Popup>
                <div>
                  <div className='eventTitle' >{recievedPositions[keys].event_name}</div>
                  <div className='eventDescription'>{recievedPositions[keys].event_description}</div>
                  <div className='eventButtonFlex'>
                  <div className='eventButton' onClick={()  => {setmarker(false)}}>Delete</div>
                  <div className='eventButton'onClick={() => {navigator.clipboard.writeText(`Latitude: ${recievedPositions[keys].lat}, Longitude: ${recievedPositions[keys].lng}`)}}>Share</div>
                  <div>0/10</div>
                  </div>
                </div>
              </Popup>
            </Marker>}

          </>
        )
      } else {
        return (
    
          <Marker key={index} position={[recievedPositions[keys].lat,recievedPositions[keys].lng]} icon={Sporticon}>
            <Popup>
              <div>
                <div className='eventTitle'>{recievedPositions[keys].event_name}</div>
                <div className='eventDescription'>{recievedPositions[keys].event_description}</div>
                <div className='eventButtonFlex'>
                <div className='eventButton'>Join</div>
                <div>0/10</div>
                </div>
              </div>
            </Popup>
          </Marker>
        )
      }
      default:
        return(
          <></>
        )
    }
  }
    )}
      <Markeronclick/>
      <LocationFinderDummy booleanforcentermarker={booleanforcentermarker}/>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer> 
    </div>
  );
}

export default Map;