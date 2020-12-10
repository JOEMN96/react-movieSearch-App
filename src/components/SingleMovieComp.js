import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
function SingleMovieComp({ match }) {
  const [movie, setMovie] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const id = match.params.id;
  let key = process.env.REACT_APP_API;
  let url = `http://www.omdbapi.com/?apikey=${key}&i=${id}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovie(res.data);
      setisLoading(false);
    });
  }, []);

  const {
    Title,
    Runtime,
    Year,
    imdbRating,
    Actors,
    Country,
    Genre,
    Director,
    Plot,
    Poster,
  } = movie;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div class="movie_card" id="bright">
        <div class="info_section">
          <div class="movie_header">
            <img class="locandina" src={Poster} alt={Title} />
            <h1>{Title}</h1> <p>{Country}</p>
            <h4>
              {Year}, {Director}
            </h4>
            <span class="minutes">{Runtime}</span>
            <p class="type">{Genre}</p>
          </div>
          <div class="movie_desc">
            <p class="text">{Plot}</p>
          </div>
          <div class="movie_social">
            <ul>
              <li>
                <p>{Actors}</p>
              </li>
            </ul>
            <h4>Rating: {imdbRating}</h4>
          </div>
        </div>
        <div
          style={{ background: `url(${Poster})` }}
          class="blur_back bright_back"
        ></div>
      </div>
    </div>
  );
}

export default SingleMovieComp;
