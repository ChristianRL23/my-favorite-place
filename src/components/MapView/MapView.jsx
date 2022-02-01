import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = ({ currentPosition }) => {
  return (
    <MapContainer
      center={{ lat: currentPosition.latitude, lng: currentPosition.longitude }}
      zoom={16}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
    </MapContainer>
  );
};

export default MapView;
