import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const login = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.remove("user");
    setUser(null);
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
