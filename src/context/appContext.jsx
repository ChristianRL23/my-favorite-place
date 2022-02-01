import React, { useState } from 'react';

const AppContext = React.createContext({
  placedMarker: null,
  setPlacedMarker: () => {},
  placeFormData: '',
  setPlaceFormData: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [placedMarker, setPlacedMarker] = useState(false);
  const [placeFormData, setPlaceFormData] = useState({
    name: '',
    category: '',
    favorite: '',
    description: '',
  });

  return (
    <AppContext.Provider
      value={{ placedMarker, setPlacedMarker, placeFormData, setPlaceFormData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
