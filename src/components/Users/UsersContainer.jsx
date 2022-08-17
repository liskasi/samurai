import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reducer";
import classes from "./Users.module.css";
let mapStateToProps = (state) => {
  debugger
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
