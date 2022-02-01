import L from 'leaflet';
import iconImg from './iconImg.png';

const icon = L.icon({
  iconSize: [27, 35],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: iconImg,
});

export default icon;
