import './App.scss';
import MapView from './components/MapView/MapView';
import Sidebar from './layouts/Sidebar/Sidebar';
import { useContext, useEffect } from 'react';
import AppContext from './context/appContext';

function App() {
  const appCtx = useContext(AppContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      appCtx.setCenterMapCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="App">
      <>
        <Sidebar />
        <MapView />
      </>
    </div>
  );
}

export default App;
