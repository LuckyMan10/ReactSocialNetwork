import React from 'react';
import styles from './Messages.module.scss';
import { NavLink } from 'react-router-dom';

const Messages_item = (props) => {
    return (
    <div>
        <li><NavLink to={"/Messages/" + props.id}><button>{props.Username}</button></NavLink></li>
    </div>
    )
}

const MessageMapItem = (props) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
}


export class Messages extends React.Component {

    AddInputMessageChange = (e) => {
        let body = e.target.value;
        this.props.updateNewMessage(body);
    }

    sendMessage = () => {
        this.props.sendMessageCreator()
    }

    handleKeyPress = (e) => {
        let handleKeyPressEvent = e.keyCode || e.which;
        if (handleKeyPressEvent === 13) {
            this.sendMessage();
        }
    }

    render() {

    return (
        <div className={styles.messages}>
            <div className={styles.messages__wrapper}>
            <div className={styles.messages__header}>
                <h2>Messages</h2>
            </div>
            <div className={styles.messages__dialogsList}>
                {this.props.messageData.map(p => <Messages_item id={p.id} Username={p.Username}/>)}
               
            </div>
            <div className={styles.messages__dialogs}>
                    
                        <div className={styles.dialogs__message_1}>
                            {this.props.messages.map(p => <MessageMapItem id={p.id} text={p.message}/>)}
                            
                        </div>
                        <div className={styles.dialogs__message_2}>
                            
                        </div>
                    
                    <div className={styles.dialogs__item_wrapper}>
                    <div className={styles.dialogs__item_content}>
                    <div className={styles.inputDialog}>
                        <input onKeyPress={this.handleKeyPress} value={this.props.newMessageBody} onChange={this.AddInputMessageChange}></input>
                    </div>
                    <div className={styles.buttonDialog}>
                        <button onClick={this.sendMessage}>Отправить</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
}
