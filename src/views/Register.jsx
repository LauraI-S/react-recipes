import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import salad from "../images-videos/salad.jpg";
import "./Register.css";
import { AuthContext } from "../context/AuthContext";
import { onAuthStateChanged } from "firebase/auth"; //this should listen to the changed authstate

function Register() {
  const { register } = useContext(AuthContext);

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [showOrHide, setShowOrHide] = useState("show");
  const redirectTo = useNavigate();

  const changePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setShowOrHide("hide");
      return;
    }
    setPasswordType("password");
    setShowOrHide("show");
  };

  const handleDisplayNameEntry = (e) => {
    const displayNameInput = e.target.value;
    setDisplayName(displayNameInput);
  };

  const handleEmailEntry = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
  };

  const handlePswEntry = (e) => {
    const pswInput = e.target.value;
    setPassword(pswInput);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      alert("Invalid email or password. Please check your input.");
      return;
    }

    // Assuming register returns a Promise
    register(displayName, email, password)
      .then(() => {
        // Redirect after a successful registration
        redirectTo("/recipes");
      })
      .catch((error) => {
        console.error("Error during registration: ", error);
        alert("Registration failed. Please try again.");
      });
  };

  useEffect(() => {
    setDisplayName(displayName);
    setEmail(email);
    setPassword(password);
  }, []);

  return (
    <div>
      <br />
      <div className="container">
        <form className="signUpForm" onSubmit={handleSignUp}>
          <p>Fill in the information below to sign up:</p>
          <label htmlFor="username">Username:</label>
          <input
            onChange={handleDisplayNameEntry}
            className="searchInputBox"
            type="text"
            placeholder="Choose username..."
            name="username"
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleEmailEntry}
            className="searchInputBox"
            type="text"
            placeholder="Enter e-mail..."
            name="email"
            required
          />
          <br /> <label htmlFor="psw">Password:</label>
          <input
            onChange={handlePswEntry}
            className="searchInputBox"
            type={passwordType}
            placeholder="Enter password..."
            name="psw"
            required
          />
          <span
            onClick={changePasswordType}
            className="hide-password"
            style={{ cursor: "pointer" }}
          >
            {showOrHide}
          </span>
          <button type="submit" className="signupbtn">
            Sign up
          </button>
        </form>

        {/* <img className="salad" src="../images-videos/salad.jpg" alt="" /> */}
      </div>
      <br />
      <p>
        Already have an account?{" "}
        <a className="resetButton" href="login">
          Log in!
        </a>
      </p>
    </div>
  );
}

export default Register;

// import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import salad from "../images-videos/salad.jpg"; // Update with the correct path
// import "./Register.css";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";
// // import { checkUserRegistration, registerUser } from "firebase";

// const Register = ({
//   handleRegister,
//   handleEmailChange,
//   handlePasswordChange,
//   handleUsernameChange,
// }) => {
//   const [userName, setUserName] = useState("");
//   const [isUserSignedIn, setIsUserSignedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsUserSignedIn(!!user);
//     });

//     return () => unsubscribe();
//   }, []);
//   const handleSignUpClick = () => {
//     if (isUserSignedIn) {
//       // If the user is already signed in, redirect to the login page
//       navigate("/login");
//     } else {
//       // Otherwise, proceed with the registration logic
//       handleRegister();
//     }
//   };

//   return (
//     <div className="registration-container">
//       <h1> SIGN UP</h1>
//       <div className="salad">
//         <img src={salad} alt="Salad" />
//       </div>
//       <h2>
//         SIGN UP TO OUR Cook´cinelle.com TO SAVE YOUR FAVOURITE RECIPES AND
//         RECEIVE OUR NEWSLETTER UPDATES
//       </h2>
//       {isUserSignedIn && (
//         <p>
//           Already have an account?{" "}
//           <Link className="resetButton" to="/login">
//             Log in!
//             <Button type="submit" variant="secondary">
//               {isUserSignedIn ? "Login" : "Register"}
//             </Button>
//           </Link>
//         </p>
//       )}
//       <form onSubmit={handleSignUpClick} className="registration-form">
//         <form onSubmit={handleRegister} className="registration-form">
//           <div className="form-group">
//             <label htmlFor="username">User Name</label>{" "}
//             <input
//               type="text"
//               id="username"
//               onChange={(e) => setUserName(e.target.value)}
//               className="form-control"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Enter Email</label>
//             <input
//               type="text"
//               id="email"
//               onChange={handleEmailChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Enter Password</label>
//             <input
//               type="password"
//               id="password"
//               onChange={handlePasswordChange}
//               className="form-control"
//             />
//           </div>
//           <Button type="submit" variant="secondary">
//             Register
//           </Button>
//         </form>
//       </form>
//       <Form>
//         {["checkbox"].map((type) => (
//           <div key={`default-${type}`} className="mb-3">
//             <Form.Check
//               type={type}
//               id={`default-${type}`}
//               label={
//                 <span className="checkbox-label">
//                   default {type}
//                   <br />
//                   Yes please, send me tasty emails! I'd like to receive news and
//                   exclusive offers from Jamie Oliver Limited about Jamie's
//                   businesses, including books, TV shows, restaurants, products,
//                   commercial partners, and campaigning activities. By signing
//                   up, you agree to our Terms of Use. Learn how we collect, use,
//                   and share your data in our Privacy Policy.
//                 </span>
//               }
//             />
//           </div>
//         ))}
//       </Form>
//     </div>
//   );
// };

// export default Register;

// import React, { useContext, useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import salad from "../images-videos/salad.jpg"; // Update with the correct path
// import "./Register.css";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// // import { checkUserRegistration, registerUser } from "firebase";

// const Register = ({
//   handleRegister,
//   handleEmailChange,
//   handlePasswordChange,
//   handleUsernameChange,
//   setUserAndUserName, // Füge setUserAndUserName als Prop hinzu
// }) => {
//   const [userName, setUserName] = useState("");
//   const [isUserSignedIn, setIsUserSignedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsUserSignedIn(!!user);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleSignUpClick = async () => {
//     if (isUserSignedIn) {
//       navigate("/login");
//     } else {
//       try {
//         const userCredential = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//         const registeredUser = userCredential.user;
//         setUserAndUserName(registeredUser, userName); // Hier wird setUserAndUserName aufgerufen
//       } catch (error) {
//         console.error("Fehler bei der Registrierung: ", error);
//       }
//     }
//   };

//   return (
//     <div className="registration-container">
//       {/* ... andere JSX ... */}
//       <form onSubmit={handleSignUpClick} className="registration-form">
//         {/* ... andere Formularfelder ... */}
//         <div className="form-group">
//           <label htmlFor="username">Benutzername</label>{" "}
//           <input
//             type="text"
//             id="username"
//             onChange={(e) => setUserName(e.target.value)}
//             className="form-control"
//             required
//           />
//         </div>
//         {/* ... andere Formularfelder ... */}
//         <Button type="submit" variant="secondary">
//           Registrieren
//         </Button>
//       </form>
//       {/* ... andere JSX ... */}
//     </div>
//   );
// };

// export default Register;

// import React, { useContext, useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import salad from "../images-videos/salad.jpg"; // Update with the correct path
// import "./Register.css";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// // import { checkUserRegistration, registerUser } from "firebase";

// const Register = ({
//   handleRegister,
//   handleEmailChange,
//   handlePasswordChange,
//   handleUsernameChange,
// }) => {
//   const { register, setUserAndUserName } = useContext(AuthContext);
//   const [userName, setUserName] = useState("");
//   const [isUserSignedIn, setIsUserSignedIn] = useState(false);
//   const navigate = useNavigate();
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setIsUserSignedIn(!!user);
//     });

//     return () => unsubscribe();
//   }, []);
// };
// const handleSignUpClick = async (e) => {
//   e.preventDefault();

//   try {
//     // Call the register function from the context
//     const userCredential = await createUserWithEmailAndPassword(
//       getAuth(),
//       email,
//       password
//     );
//     await updateProfile(userCredential.user, { displayName: userName });
//     const registeredUser = userCredential.user;
//     // Set the user and user name in the context
//     setUserAndUserName(userCredential.user, userName);
//     navigate("/recipes");
//   } catch (error) {
//     // Handle registration error
//     console.error("Registration error: ", error);
//   }

//   return (
//     <div className="registration-container">
//       <h1> SIGN UP</h1>
//       <div className="salad">
//         <img src={salad} alt="Salad" />
//       </div>
//       <h2>
//         SIGN UP TO OUR Cook´cinelle.com TO SAVE YOUR FAVOURITE RECIPES AND
//         RECEIVE OUR NEWSLETTER UPDATES
//       </h2>
//       {isUserSignedIn && (
//         <p>
//           Already have an account?{" "}
//           <Link className="resetButton" to="/login">
//             Log in!
//             <Button type="submit" variant="secondary">
//               {isUserSignedIn ? "Login" : "Register"}
//             </Button>
//           </Link>
//         </p>
//       )}
//       <form onSubmit={handleSignUpClick} className="registration-form">
//         <div className="form-group">
//           <label htmlFor="username">User Name</label>{" "}
//           <input
//             type="text"
//             id="username"
//             onChange={(e) => setUserName(e.target.value)}
//             className="form-control"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Enter Email</label>
//           <input
//             type="text"
//             id="email"
//             onChange={handleEmailChange}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Enter Password</label>
//           <input
//             type="password"
//             id="password"
//             onChange={handlePasswordChange}
//             className="form-control"
//           />
//         </div>
//         <Button type="submit" variant="secondary">
//           Register
//         </Button>
//       </form>
//       <Form>
//         {["checkbox"].map((type) => (
//           <div key={`default-${type}`} className="mb-3">
//             <Form.Check
//               type={type}
//               id={`default-${type}`}
//               label={
//                 <span className="checkbox-label">
//                   Yes please, send me tasty emails! I'd like to receive news and
//                   exclusive offers from Jamie Oliver Limited about Jamie's
//                   businesses, including books, TV shows, restaurants, products,
//                   commercial partners, and campaigning activities. By signing
//                   up, you agree to our Terms of Use. Learn how we collect, use,
//                   and share your data in our Privacy Policy.
//                 </span>
//               }
//             />
//           </div>
//         ))}
//       </Form>
//     </div>
//   );
// };

// export default Register;
