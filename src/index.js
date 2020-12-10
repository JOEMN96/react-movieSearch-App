import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobolContextProvider } from "./configs/Store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <GlobolContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </GlobolContextProvider>,
  document.getElementById("root")
);
