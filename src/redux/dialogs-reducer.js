const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  //иммутабельность. иммутабельным (immutable — неизменяемым) называется объект, который после своего создания не может быть изменен
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
