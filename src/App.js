import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import { compose } from "redux";
import { withRouter } from "./components/Profile/withRouter";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import { initializeApp } from "./redux/app-reducer";

class App extends Component {
  debugger
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path={"/profile"} element={<ProfileContainer />} >
              <Route path={"/profile/:userId"} element={<ProfileContainer />} />
            </Route>
            <Route path={"/dialogs/*"} element={<DialogsContainer />} />
            <Route path={"/users/*"} element={<UsersContainer />} />
            <Route path="/feed" element="" />
            <Route path="/music" element="" />
            <Route path="/settings" element="" />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
