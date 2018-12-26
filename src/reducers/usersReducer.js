export default (state = [], action) => {
  // console.log("Action FETCH_USER");
  switch (action.type) {
    case "FETCH_USER":
      return [...state, action.payload];
    default:
      return state;
  }
};
