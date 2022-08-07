import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
// let reducers = combineReducers({
//     profilePage: profileReducer,
//     dialogsPage: dialogsReducer,
//     sidebar: sidebarReducer
// });

let store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
  }
});
window.store = store;

export default store;
