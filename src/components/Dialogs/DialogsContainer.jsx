import React from "react";
import { NavLink } from "react-router-dom";
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
                props.store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs updateNewMessageBodyCreator={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={store.getState().dialogsPage} />
        }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;