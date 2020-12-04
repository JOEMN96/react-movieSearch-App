import React, { useReducer } from "react";

export const GlobolContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchVal: action.payload,
        loading: true,
      };
    case "MOVIELIST":
      return {
        ...state,
        movieLists: [action.payload],
      };
    case "LOADINGOFF":
      return {
        ...state,
        loading: action.payload,
      };
  }
};

const initial = {
  searchVal: "",
  loading: false,
  movieLists: [],
};

export const GlobolContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <GlobolContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobolContext.Provider>
  );
};
