import React from "react";
import { GlobolContext } from "../configs/Store";
import Loader from "./Loader";
import MovieCard from "./MovieCard";

function MoviesContainer() {
  const { state } = React.useContext(GlobolContext);
  const { movieLists, loading } = state;

  let content =
    movieLists &&
    movieLists.map((movie, index) => {
      return <MovieCard movie={movie} key={index} />;
    });

  return (
    <div className="container">
      <div className="row ">
        {loading ? (
          <Loader />
        ) : (
          content || (
            <h1 className="SorryTxt"> Sorry 😓 Plz Check Your Search Term</h1>
          )
        )}
      </div>
    </div>
  );
}

export default MoviesContainer;
