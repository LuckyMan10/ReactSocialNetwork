import React from 'react';
import {updateNewMessage, sendMessageCreator} from '../../reducer/messages_reducer';
import Messages from './Messages';

const Messages_container = (props) => {
    let state = props.store.getState();

    const AddChange = (body) => {

        props.store.dispatch(updateNewMessage(body));
    }

    const AddSendMessage = () => {
    props.store.dispatch(sendMessageCreator());
    }
    return (
        <Messages
        AddChange={AddChange}
        AddSendMessage={AddSendMessage}
        messageData={state.dialogsPage.messageData}
        messages={state.dialogsPage.messages}
        newMessageBody={state.dialogsPage.newMessageBody}
        />
    )
}
export default Messages_container;