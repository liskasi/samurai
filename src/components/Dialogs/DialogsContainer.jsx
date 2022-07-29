import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import Message from './Message/Message';
import Dialogs from './Dialogs';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs />
    );
}

export default DialogsContainer;