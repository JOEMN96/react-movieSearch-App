import React from "react";
import MoviesContainer from "./components/MoviesContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import SingleMovieComp from "./components/SingleMovieComp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <MoviesContainer />
        </Route>
        <Route exact path="/movie/:id" component={SingleMovieComp} />
      </Switch>
    </div>
  );
}

export default App;
