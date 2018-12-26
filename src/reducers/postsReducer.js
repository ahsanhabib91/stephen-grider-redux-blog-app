export default (state = [], action) => {
  // console.log("Action FETCH_POSTS");
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
