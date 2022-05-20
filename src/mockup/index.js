// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import { getDogs } from "./dogapi";
// import "./styles.css";

// const App = () => {
//   const [allImages, setAllImages] = useState([]);
//   const [index, setIndex] = useState(0);
//   const [shouldShowPrevButton, setShouldShowPrevButton] = useState(false);
//   const [shouldShowNextButton, setShouldShowNextButton] = useState(true);

//   useEffect(() => {
//     async function fetchDogs() {
//       let dogsArray = await getDogs();
//       setAllImages(dogsArray);
//       if (dogsArray.length > 0) setShouldShowNextButton(true);
//     }
//     fetchDogs();
//   }, []);

//   useEffect(() => {
//     if (index > 0 && index < allImages.length - 1) {
//       setShouldShowPrevButton(true);
//       setShouldShowNextButton(true);
//     } else if (index > 0) {
//       setShouldShowPrevButton(true);
//       setShouldShowNextButton(false);
//     } else {
//       setShouldShowPrevButton(false);
//       setShouldShowNextButton(true);
//     }
//   }, [index]);

//   const handlePrevClick = () => {
//     setIndex(index - 1);
//   };

//   const handleNextClick = () => {
//     setIndex(index + 1);
//   };

//   return (
//     <section>
//       <img src={allImages[index] && allImages[index].url} />
//       <h2>{allImages[index] && allImages[index].title}</h2>
//       <div>
//         <button disabled={!shouldShowPrevButton} onClick={handlePrevClick}>
//           {"<"}
//         </button>
//         <button disabled={!shouldShowNextButton} onClick={handleNextClick}>
//           {">"}
//         </button>
//       </div>
//     </section>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
/button>
//       </div>
//     </section>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
