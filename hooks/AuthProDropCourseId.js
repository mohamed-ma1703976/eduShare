import { createContext, useState } from "react";

export const AuthContextDropCourse = createContext();

export const AuthProDropCourseId = ({ children }) => {
  const [userIdd, setUserId] = useState(null);

  const loginn = (userId) => {
    setUserId(userId);
  };

  const logoutt = () => {
    setUserId(null);
  };

  return (
    <AuthProDropCourseId.Provider value={{ userIdd, loginn, logoutt }}>
      {children}
    </AuthProDropCourseId.Provider>
  );
};
