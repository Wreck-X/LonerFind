import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: require('/src/assets/icon.js'),
    iconRetinaUrl: require('online.github.io/src/assets/icon.js'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPerson };