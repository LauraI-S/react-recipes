import { createContext, useState, ReactNode } from "react";

// const AuthInitContext = {
//     setUser: () => console.log('context not initialised :>> ', context not initialised);

const AuthInContext = {
  setUser: () => console.log("context not initialised :>> "),
};
//!1: create Context
export const AuthContext = createContext(AuthInContext);

//!2: Define what´s inside my Context
export const AuthContextProvider = ({ children }) => {
  //!3 Declare the state & functions I want to export
  const [user, setUser] = useState(null);
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
