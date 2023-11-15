import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebaseConfig";

// Definiere den anfänglichen Authentifizierungszustand
const AuthInContext = {
  user: null,
  userName: "",
  setUser: () => console.log("context not initialised :>> "),
  logout: () => console.log("context not initialised"),
  register: () => console.log("context not initialised"),
  login: () => console.log("context not initialised"),
};

// Erstelle den Authentifizierungskontext
export const AuthContext = createContext(AuthInContext);

// Erstelle den Authentifizierungskontext-Anbieter
export const AuthContextProvider = ({ children }) => {
  // Definiere den Benutzerzustand und die zugehörigen Funktionen
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");

  // Funktion zur Benutzerregistrierung
  const register = async (displayName, email, password) => {
    console.log(
      "displayName, email, password :>> ",
      displayName,
      email,
      password
    );
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const registeredUser = userCredential.user;
      // setUserAndUserName(registeredUser, userName);
      //Modify userProfile, by adding a "new" value (initially is null) to the displayName, or any other field
      if (registeredUser) {
        //create code to modify profile inside here
      }
      console.log("register success: ", registeredUser);
      //REVIEW if you want to let the user already logged in after register, just set the user here
      setUser(registeredUser);

      //REVIEW but if you prefer to make the user having to login after register..just do a redirect here
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("registration went wrong: ", error);
    }
  };
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const loggedUser = userCredential.user;
        console.log("loggedUser :>> ", loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode :>> ", errorCode);
      });
  };

  // Funktion zur Abmeldung des Benutzers
  const logout = async () => {
    //async await
    //1. create a variable that is gonna store the result of the promise when it is POSITIVELY resolved
    //2. create a try/catch block to handle the error if the promise is not fulfilled
    try {
      await signOut(auth);

      setUser(null);
      console.log("auth :>> ", auth);
      alert("you've been logged out");
    } catch (error) {
      console.log("cannot logout:>> ", error);
    }
  };
  const setUserAndUserName = (user, name) => {
    setUser(user);
    setUserName(name);
  };

  const checkWhichUserIsLogged = () => {
    // const auth = getAuth();
    // const firebaseUser = auth.currentUser;
    // console.log("user currently logged in:>> ", firebaseUser);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("loggedUser is still logged in");
        // console.log("uid :>> ", uid);
        // console.log("loggedUser from Firebase :>> ", user);
        setUser(user);
        // ...
      } else {
        console.log("loggedUser is logged out :>> "); // ...
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkWhichUserIsLogged();
  }, []);

  // Stelle den Authentifizierungszustand und die Funktionen über den Kontext bereit
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        register,
        login,
        userName,
        setUserAndUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
