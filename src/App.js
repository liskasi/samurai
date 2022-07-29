import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

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
                  store={props.store}
                />
              }
            />
            <Route
              path={"/dialogs/*"}
              element={<DialogsContainer store={props.store} />}
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
