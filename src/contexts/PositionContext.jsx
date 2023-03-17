import {createContext, useState, useEffect} from 'react';

export const PositionContext = createContext();

export const PositionProvider = ({children}) => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    console.log(position)
  }, [position]);

  return (
    <PositionContext.Provider value={{ position, setPosition }}>
      {children}
    </PositionContext.Provider>
  );
};
