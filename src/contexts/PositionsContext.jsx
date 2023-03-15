import {createContext, useEffect, useState} from 'react';

export const PositionsContext = createContext();

export const PositionsProvider = ({children}) => {
  const [positions, setPositions] = useState([]);
  const [meters, setMeters] = useState(0);

  useEffect(() => {
    console.log("context meters:", meters)
  }, [meters])

  return (
    <PositionsContext.Provider value={{positions, setPositions, meters, setMeters}}>
      {children}
    </PositionsContext.Provider>
  );
};
