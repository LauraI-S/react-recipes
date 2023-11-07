import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState, ReactNode } from "react";
import { auth } from "../config/firebaseConfig";

// const AuthInitContext = {
//     setUser: () => console.log('context not initialised :>> ', context not initialised);

const AuthInContext = {
  user: null,
  setUser: () => console.log("context not initialised :>> "),
  logout: () => console.log("context not initialised"),
  register: () => console.log("context not initialised"),
};
//!1: create Context
export const AuthContext = createContext(AuthInContext);

//!2: Define what´s inside my Context
export const AuthContextProvider = ({ children }) => {
  //!3 Declare the state & functions I want to export
  const [user, setUser] = useState(null);

  const register = (email, password) => {
    // console.log("email, password :>> ", email, password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("register success :>> ", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("register went wrong :>> ", error);
      });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
