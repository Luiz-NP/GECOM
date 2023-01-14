import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [distance, setDistance] = useState(0);
  
  return (
    <DataContext.Provider value={{ data, setData, distance, setDistance }}>
      { children }
    </DataContext.Provider>
  );
};
