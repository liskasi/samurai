import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
