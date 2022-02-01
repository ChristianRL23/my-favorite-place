import React, { useState } from 'react';

const AppContext = React.createContext({
  placedMarker: null,
  setPlacedMarker: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [placedMarker, setPlacedMarker] = useState(false);

  return (
    <AppContext.Provider value={{ placedMarker, setPlacedMarker }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
