import React, { useReducer } from "react";
import reducer from "../configs/Reducer";
export const Context = React.createContext();

const initialState = [
  {
    aa: "hjjio",
  },
];

export const Store = (props) => {
  const [globolState, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ globolState, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
