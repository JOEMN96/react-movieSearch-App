import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobolContextProvider } from "./configs/Store";

ReactDOM.render(
  <GlobolContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobolContextProvider>,
  document.getElementById("root")
);
