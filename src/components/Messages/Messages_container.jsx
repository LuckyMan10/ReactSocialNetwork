import React from 'react';
import { updateNewMessage, sendMessageCreator } from '../../reducer/messages_reducer';
import StoreContext from '../../StoreContext';
import Messages from './Messages';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        messageData: state.dialogsPage.messageData,
        messages: state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        AddChange: (body) => {
            dispatch(updateNewMessage(body));
        },
        AddSendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const Messages_container = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default Messages_container;