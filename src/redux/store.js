import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _callSubscriber() {
    console.log("state changed");
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Heyo, how are you?", likesCount: 0 },
        { id: 2, message: "Im here", likesCount: 57 },
        { id: 3, message: "Test 3", likesCount: 18 },
        { id: 4, message: "Test 4", likesCount: 1 },
      ],
      newPostText: "liska",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Howareyou" },
        { id: 3, message: "x D" },
        { id: 4, message: ":DDD" },
      ],
      dialogs: [
        { id: 1, name: "Lisa" },
        { id: 2, name: "Max" },
        { id: 3, name: "Mari" },
        { id: 4, name: "Karis" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
