import { createContext, useState } from "react";

export const DataContext = createContext<Context>({} as Context);

type Props = {
  children: JSX.Element,
};

type Data = {
  photo: string,
  location: object,
}

interface Context {
  data: Data[],
  setData: React.Dispatch<React.SetStateAction<Data[]>>,
  distance: number,
  setDistance: React.Dispatch<React.SetStateAction<number>>,
}

export const DataProvider = ({ children }: Props) => {
  const [data, setData] = useState<Data[]>([]);
  const [distance, setDistance] = useState(0);
  
  return (
    <DataContext.Provider value={{ data, setData, distance, setDistance }}>
      { children }
    </DataContext.Provider>
  );
};
