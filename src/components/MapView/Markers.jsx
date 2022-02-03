import { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';
import AppContext from './../../context/appContext';
import icon from './icon';
import './Markers.scss';

const Markers = () => {
  const appCtx = useContext(AppContext);
  const { markers } = appCtx;

  const allMarkers = markers.map((place) => (
    <Marker
      key={place.name + place.lat}
      position={{ lat: place.lat, lng: place.lng }}
      icon={icon}
    >
      <Popup>{place.name}</Popup>
    </Marker>
  ));
  return allMarkers;
};

export default Markers;
