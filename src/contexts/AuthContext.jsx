import { createContext, useEffect } from "react";
import auth from "@react-native-firebase/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => setUser(user));
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      { children }
    </AuthContext.Provider>
  );
}
