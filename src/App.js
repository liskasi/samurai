import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/dialogs/*"} element={<DialogsContainer />} />
            <Route path={"/users/*"} element={<UsersContainer />} />
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
