import locationIcon from './location.svg';
import './Sidebar.scss';
import logo from './logo.svg';
import { useContext, useState, useEffect } from 'react';
import AppContext from '../../context/appContext';
import Welcome from '../Welcome/Welcome';
import AddPlace from '../AddPlace/AddPlace';
import AllPlaces from '../AllPlaces/AllPlaces';

const Sidebar = () => {
  const appCtx = useContext(AppContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
    }, 2000);
    return () => clearTimeout(timer);
  }, [error]);

  let sidebarContent;

  //If there are no markers and the main marker is not placed.
  if (appCtx.markers.length === 0 && appCtx.placedMarker === false) {
    sidebarContent = <Welcome />;
    //When the main marker is placed.
  } else if (appCtx.placedMarker) {
    sidebarContent = <AddPlace error={error} setError={setError} />;
    //When the main marker is not placed and there are one or more places added.
  } else if (appCtx.placedMarker === false && appCtx.markers.length > 0) {
    sidebarContent = <AllPlaces />;
  }

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const map = appCtx.mapInstance;
        map.flyTo(location, 15);
      },
      () =>
        alert(
          'Your location cannot be found, please accept the permissions, change your device settings to access your location, or try again.'
        )
    );
  };

  return (
    <aside className="sidebar">
      <div onClick={getCurrentLocation} className="sidebar__location">
        <h6>Get current location</h6>
        <img src={locationIcon} alt="Location icon" />
      </div>
      <img className="logo" src={logo} alt="App logo" />
      {sidebarContent}
    </aside>
  );
};

export default Sidebar;
