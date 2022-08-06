import React from "react";
import { NavLink } from "react-router-dom";
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

import {connect} from "react-redux";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage : () => {
                dispatch(sendMessageCreator());
            },
            updateNewMessageBodyCreator : (body) => {
              dispatch(updateNewMessageBodyCreator(body));
            }
  }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;