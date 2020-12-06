import React from "react";
import noImg from "../assets/600px-No_image_available.svg.webp";

function MovieCard({ movie }) {
  let { Title, Year, Type, Poster, imdbID } = movie;

  let url = `http://www.omdbapi.com/?apikey=5db5b49b&i=${imdbID}`;

  if (Poster === "N/A") {
    Poster = noImg;
  }

  return (
    <div className="col-md-4">
      <div className="movie-card">
        <div className="movie-header ">
          <img src={Poster} className="babyDriver" alt="" />
        </div>
        <div className="movie-content">
          <div className="movie-content-header">
            <a href="#">
              <h3 className="movie-title">{Title}</h3>
            </a>
          </div>
          <div className="movie-info">
            <div className="info-section">
              <label>Year</label>
              <span>{Year}</span>
            </div>
            <div className="info-section">
              <label>Type</label>
              <span>{Type} </span>
            </div>
            <div className="info-section">
              <label>Learn More</label>
              <span>{Type} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
