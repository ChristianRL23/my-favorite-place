import './App.scss';
import MapView from './components/MapView/MapView';
import Sidebar from './layouts/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { AppContextProvider } from './context/appContext';

function App() {
  const [currentPosition, setCurrentPosition] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="App">
      {currentPosition !== false && (
        <AppContextProvider>
          <Sidebar />
          <MapView currentPosition={currentPosition} />
        </AppContextProvider>
      )}
    </div>
  );
}

export default App;
