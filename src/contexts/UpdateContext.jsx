import { createContext, useState } from "react";

export const UpdateContext = createContext();

export const UpdateProvider = ({ children }) => {
  const [update, setUpdate] = useState(false);
  
  return (
    <UpdateContext.Provider value={{ update, setUpdate }}>
      { children }
    </UpdateContext.Provider>
  );
};
