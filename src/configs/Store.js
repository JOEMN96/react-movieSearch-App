import React, { useReducer } from "react";
import Reducer from "../configs/Reducer";

export const GlobolContext = React.createContext();

const initial = {
  searchVal: "",
  loading: false,
  movieLists: [],
};

export const GlobolContextProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initial);

  return (
    <GlobolContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobolContext.Provider>
  );
};
