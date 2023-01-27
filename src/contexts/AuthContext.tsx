import { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";

export const AuthContext = createContext({});

type Props = {
  children: JSX.Element
};

type User = object | null;

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    auth().onAuthStateChanged(user => setUser(user));
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      { children }
    </AuthContext.Provider>
  );
};
