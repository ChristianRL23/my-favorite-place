import React from 'react';

const AppContext = React.createContext({
  placedMarker: null,
});

export const AppContextProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default AppContext;
