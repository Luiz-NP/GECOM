import {createContext, useEffect, useState} from 'react';
import {getPreciseDistance} from 'geolib';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [data, setData] = useState([]);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    console.log(data.length);

    if (data.length >= 2) {
      let meters = 0;

      for (let count = 0; count <= data.length - 2; count++) {
        meters += getPreciseDistance(
          data[count].location,
          data[count + 1].location,
        );
      }

      console.log(meters);

      setDistance(meters);
    }
  }, [data]);

  return (
    <DataContext.Provider value={{data, setData, distance, setDistance}}>
      {children}
    </DataContext.Provider>
  );
};
