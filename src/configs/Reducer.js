const Reducer = (state, action) => {
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
        movieLists: action.payload.data.data.Search,
        loading: action.payload.loading,
      };
    case "LOADINGOFF":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
