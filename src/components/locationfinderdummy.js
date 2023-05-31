
import { useMap,Marker } from "react-leaflet";
export default function LocationFinderDummy ({handleClick,togglePanel,booleanforcentermarker}) {   
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