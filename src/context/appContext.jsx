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
  centerMapCoords: '',
  setCenterMapCoords: () => {},
  mapInstance: '',
  setMapInstance: () => {},
  cleanForm: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [placedMarker, setPlacedMarker] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [centerMapCoords, setCenterMapCoords] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [placeFormData, setPlaceFormData] = useState({
    name: '',
    category: '',
    description: '',
  });

  const cleanForm = () => {
    setPlaceFormData({
      name: '',
      category: '',
      description: '',
    });
  };

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
        centerMapCoords,
        setCenterMapCoords,
        mapInstance,
        setMapInstance,
        cleanForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
