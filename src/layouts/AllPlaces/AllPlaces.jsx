import { useContext } from 'react';
import AppContext from '../../context/appContext';
import './AllPlaces.scss';
import Place from '../../components/Place/Place';

const AllPlaces = () => {
  const appCtx = useContext(AppContext);

  const localatePlace = (marker) => {
    const placeCoords = {
      lat: marker.lat,
      lng: marker.lng,
    };
    const map = appCtx.mapInstance;
    map.flyTo(placeCoords, 16);
  };

  return (
    <div className="all-places">
      <h2 className="all-places__title">Favorite places</h2>
      <div className="all-places__places">
        {appCtx.markers.map((marker) => (
          <Place
            clickFn={() => localatePlace(marker)}
            key={marker.name + marker.category + marker.description[3]}
            name={marker.name}
            category={marker.category}
            description={marker.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPlaces;
