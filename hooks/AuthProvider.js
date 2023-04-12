import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [currentId, setCurrentId] = useState(null);

  const login = (userId) => {
    setUserId(userId);
  };

  const logout = () => {
    setUserId(null);
  };
  const currentIdState = (currentId) => {
    setCurrentId(currentId);
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout ,currentIdState,currentId}}>
      {children}
    </AuthContext.Provider>
  );
};
