import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // calling action creators in action creators

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id))) // calling action creators in action creators
    .value();
};

// export const fetchPosts = () => {
//     return function(dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts');
//         dispatch({ type: "FETCH_POSTS", payload: response });
//     }
// };
// Or
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  // console.log("response:", response);
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

/**
 * calling action creators in action creators -> Stephen Grider Lecture 186
 */
