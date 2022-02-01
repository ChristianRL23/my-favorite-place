import { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';
import AppContext from './../../context/appContext';
import icon from './icon';

const Markers = () => {
  const appCtx = useContext(AppContext);
  const { markers } = appCtx;

  const allMarkers = markers.map((place) => (
    <Marker position={{ lat: place.lat, lng: place.lng }} icon={icon}>
      <Popup>{place.placeName}</Popup>
    </Marker>
  ));
  return allMarkers;
};

export default Markers;
