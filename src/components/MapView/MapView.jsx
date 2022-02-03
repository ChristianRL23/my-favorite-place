import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import ClickMap from './ClickMap';
import Markers from './Markers';
import { useContext } from 'react';
import AppContext from '../../context/appContext';

const MapView = () => {
  const appCtx = useContext(AppContext);

  return (
    <MapContainer
      whenCreated={(map) => appCtx.setMapInstance(map)}
      center={appCtx.centerMapCoords}
      zoom={16}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <ClickMap />
      <Markers />
    </MapContainer>
  );
};

export default MapView;
