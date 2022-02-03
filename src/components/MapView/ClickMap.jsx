import { useContext } from 'react';
import { useMapEvents, Marker, useMap } from 'react-leaflet';
import AppContext from '../../context/appContext';
import icon from './icon';

const ClickMap = () => {
  const appCtx = useContext(AppContext);

  // eslint-disable-next-line no-unused-vars
  const map = useMapEvents({
    click(e) {
      appCtx.setPlacedMarker(true);
      appCtx.setMarkerPosition({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return appCtx.markerPosition === null ? null : (
    <Marker
      icon={icon}
      position={{
        lat: appCtx.markerPosition.lat,
        lng: appCtx.markerPosition.lng,
      }}
    ></Marker>
  );

  /* return null; */
};

export default ClickMap;
