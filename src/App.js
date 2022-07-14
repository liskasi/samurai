import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

/* yuyiuiuy ssS sssSSS*/
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path={"/profile"}
              element={
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route
              path={"/dialogs/*"}
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route path="/feed" element="" />
            <Route path="/music" element="" />
            <Route path="/settings" element="" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
