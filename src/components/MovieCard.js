import React from "react";
import noImg from "../assets/600px-No_image_available.svg.webp";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  let { Title, Year, Type, Poster, imdbID } = movie;

  if (Poster === "N/A") {
    Poster = noImg;
  }

  return (
    <div className="col-md-4">
      <div className="movie-card">
        <div className="movie-header ">
          <img src={Poster} className="babyDriver" alt={Title} />
        </div>
        <div className="movie-content">
          <div className="movie-content-header">
            <h3 className="movie-title">
              <Link to={"/movie/" + imdbID}> {Title}</Link>
            </h3>
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
              <label>More</label>
              <span>
                <Link to={"/movie/" + imdbID}>Learn More</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieCard;
