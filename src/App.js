import React from "react";
import Navbar from "./components/Navbar";

function App() {
  // const { state, dispatch } = useContext(GlobalContext);
  // console.log(state);
  // const fetchMovie = axios
  //   .get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${state.text}`)
  //   .then((res) => {
  //     dispatch({ type: "MOVIE", payload: res });
  //   })
  //   .catch((err) => console.log(err));

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
