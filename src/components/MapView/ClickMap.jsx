import { useContext, useState } from 'react';
import { useMapEvents, Marker } from 'react-leaflet';
import AppContext from '../../context/appContext';
import icon from './icon';

const ClickMap = () => {
  const [markerPosition, setMarkerPosition] = useState(null);

  const appCtx = useContext(AppContext);

  // eslint-disable-next-line no-unused-vars
  const map = useMapEvents({
    click(e) {
      appCtx.setPlacedMarker(true);
      setMarkerPosition({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return markerPosition === null ? null : (
    <Marker
      icon={icon}
      position={{ lat: markerPosition.lat, lng: markerPosition.lng }}
    ></Marker>
  );

  /* return null; */
};

export default ClickMap;
