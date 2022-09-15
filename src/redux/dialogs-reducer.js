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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  //иммутабельность. иммутабельным (immutable — неизменяемым) называется объект, который после своего создания не может быть изменен
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
