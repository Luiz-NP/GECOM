import { createContext, useState } from "react";

export const DataContext = createContext({});

type Props = {
  children: JSX.Element,
};

export const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState([]);
  const [distance, setDistance] = useState(0);
  
  return (
    <DataContext.Provider value={{ data, setData, distance, setDistance }}>
      { children }
    </DataContext.Provider>
  );
};
