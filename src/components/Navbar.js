import React, { useContext, useState } from "react";
import { Context } from "../configs/Store";

function Navbar() {
  let { globolState, dispatch } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(globolState);
  const handleSub = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: searchTerm });
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
            onChange={(e) => setSearchTerm(e.target.value)}
            required
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
