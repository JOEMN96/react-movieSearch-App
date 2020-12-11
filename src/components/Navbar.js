import React, { useContext, useState } from "react";
import { GlobolContext } from "../configs/Store";
import axios from "axios";
function Navbar() {
  const { dispatch } = useContext(GlobolContext);
  const [movieName, setmovieName] = useState("");
  function fetchMovies(term) {
    let url = process.env.REACT_APP_API;
    axios
      .get(
        `http://www.omdbapi.com/?apikey=5db5b49b&s=${term}
    `
      )
      .then((data) => {
        dispatch({ type: "MOVIELIST", payload: { data, loading: false } });
      })
      .catch((err) => console.log(err, "errrrr"));
  }

  const handleSub = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: movieName });
    fetchMovies(movieName);
    dispatch({ type: "LOADINGOFF", payload: true });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <b className="navbar-brand" href="#">
        MovieDB
      </b>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              About api
            </a>
          </li>
        </ul>
        <form onSubmit={handleSub} className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            required
            onChange={(e) => setmovieName(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
