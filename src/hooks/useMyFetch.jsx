// // import React from "react";

// // function useMyFetch({ url }) {
// //     const [data, setData] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     const fetchData = async (url) => {
// //         try {
// //             const response = await fetch(url);
// //             if (response.ok) {
// //                 const result = await response.json();
// //                 console.log('result on custom Hook :>> ', result);
// //                 setData(result)
// //             } else {
// //                 const result = (await response.json())
// //                 setError(result.error)
// //             }
// //         } catch (e) {
// //             console.log('error :>> ', e);
// //             const { message } = e;
// //             setError(message);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchData(url)
// //     }, [url])

// //     const

// //     return returnObject
// // }

// // export default useMyFetch;

// import React, { useState, useEffect } from "react";

// function useMyFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // Fehler sollte am Anfang null sein

//   const fetchData = async (url) => {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const result = await response.json(); // Richtiges Aufrufen von response.json()
//         setData(result);
//         setLoading(false); // Daten wurden erfolgreich geladen
//       } else {
//         const result = await response.json();
//         setError(result.error);
//         setLoading(false); // Fehler trat auf, Ladezustand beenden
//       }
//     } catch (e) {
//       console.log("error :>> ", e);
//       const { message } = e;
//       setError(message);
//       setLoading(false); // Fehler trat auf, Ladezustand beenden
//     }
//   };

//   useEffect(() => {
//     fetchData(url);
//   }, [url]);

//   const returnObject = { data, loading, error }; // Ein Objekt mit den abgerufenen Daten, Ladezustand und Fehlern

//   return returnObject;
// }

// export default useMyFetch;
