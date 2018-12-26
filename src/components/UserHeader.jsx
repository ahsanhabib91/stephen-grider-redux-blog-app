import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    // console.log("[UserHeader] componentDidMount()", this.props.userId);
    // console.log("[UserHeader] componentDidMount()");
    this.props.fetchUser(this.props.userId);
  }
  render() {
    // console.log("[UserHeader] render()", this.props);
    // console.log("[UserHeader] render()");
    // const user = this.props.users.find(user => user.id === this.props.userId);
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div className="header">
        {user.name} - {user.id}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //   console.log("Userheader state:", state);
  //   console.log("[Userheader] state");
  //   return { users: state.users };
  return { user: state.users.find(user => user.id === ownProps.userId) };
  //   return { user: undefined };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
