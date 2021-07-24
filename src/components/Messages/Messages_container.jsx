import React from 'react';
import { updateNewMessage, sendMessageCreator } from '../../reducer/messages_reducer';
import { Messages } from './Messages';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class MessageComponent extends React.Component {

    render() {
        return (
            <Messages {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        messageData: state.dialogsPage.messageData,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.AuthReducer.isAuth,
    }
}

export const MessageContainer = compose(
    connect(mapStateToProps, {
        updateNewMessage,
        sendMessageCreator,
    }),
    WithAuthRedirect
)(MessageComponent);