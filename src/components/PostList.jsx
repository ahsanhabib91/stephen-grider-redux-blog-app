import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    // console.log("PostList componentDidMount()");
    this.props.fetchPosts();
  }
  render() {
    console.log("this.props:", this.props.posts);
    return <div>Post List</div>;
  }
}

const mapStateToProps = state => {
  // console.log("state:", state);
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
