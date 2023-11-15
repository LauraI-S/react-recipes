// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";

// function Favorite({ onClick, isBlack, setIsBlack }) {
//   const { user } = useContext(AuthContext);

//   const toggleFavoriteClick = () => {
//     if (user) {
//       setIsBlack((prev) => !prev);
//       onClick();
//     } else {
//       alert("You need to log in to be able to save recipes!");
//     }
//   };

//   return (
//     <div>
//       <button
//         style={{ color: isBlack ? "black" : "white" }}
//         onClick={toggleFavoriteClick}
//         className="favIcon"
//       >
//         ❤
//       </button>
//     </div>
//   );
// }

// export default Favorite;
