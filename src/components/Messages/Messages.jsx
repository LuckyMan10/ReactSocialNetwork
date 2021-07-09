import React from 'react';
import styles from './Messages.module.css';
import { NavLink } from 'react-router-dom';
import {updateNewMessage, sendMessageCreator} from '../../reducer/messages_reducer';
import AddChange from './Messages_container';
import AddSendMessage from './Messages_container';

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


const Messages = (props) => {
    
    const AddInputMessageChange = (e) => {
        let body = e.target.value;
        props.AddChange(body);
    }

    const sendMessage = () => {
        props.AddSendMessage()
    //props.store.dispatch(sendMessageCreator());
    }
    const handleKeyPress = (e) => {
        let handleKeyPressEvent = e.keyCode || e.which;
        if (handleKeyPressEvent === 13) {
            sendMessage();
        }
    }
    let mItem = props.messageData.map(p => <Messages_item id={p.id} Username={p.Username}/>)
    let messageMap = props.messages.map(p => <MessageMapItem id={p.id} text={p.message}/>)
    return (
        <div className={styles.messages}>
            <div className={styles.messages__wrapper}>
            <div className={styles.messages__header}>
                <h2>Messages</h2>
            </div>
            <div className={styles.messages__dialogsList}>
                {mItem}
               
            </div>
            <div className={styles.messages__dialogs}>
                    
                        <div className={styles.dialogs__message_1}>
                            {messageMap}
                            
                        </div>
                        <div className={styles.dialogs__message_2}>
                            
                        </div>
                    
                    <div className={styles.dialogs__item_wrapper}>
                    <div className={styles.dialogs__item_content}>
                    <div className={styles.inputDialog}>
                        <input onKeyPress={handleKeyPress} value={props.newMessageBody} onChange={AddInputMessageChange}></input>
                    </div>
                    <div className={styles.buttonDialog}>
                        <button onClick={sendMessage}>Отправить</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Messages;