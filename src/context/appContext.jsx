import React, { useState } from 'react';

const AppContext = React.createContext({
  placedMarker: null,
  setPlacedMarker: () => {},
  placeFormData: '',
  setPlaceFormData: () => {},
  markerPosition: '',
  setMarkerPosition: () => {},
  markers: '',
  setMarkers: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [placedMarker, setPlacedMarker] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [placeFormData, setPlaceFormData] = useState({
    name: '',
    category: '',
    favorite: '',
    description: '',
  });

  return (
    <AppContext.Provider
      value={{
        markers,
        setMarkers,
        placedMarker,
        setPlacedMarker,
        placeFormData,
        setPlaceFormData,
        setMarkerPosition,
        markerPosition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
