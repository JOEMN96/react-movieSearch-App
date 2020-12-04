const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { bb: action.payload }];
    default:
      return state;
  }
};

export default reducer;
