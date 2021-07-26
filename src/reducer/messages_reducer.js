const UPDATE_NEW_MESSAGE_BODY = 'messages/UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'messages/SEND-MESSAGE';

let initialState = {
  messageData: [
    {Username: 'Danil', id:'1'},
    {Username: 'Egor', id:'2'},
    {Username: 'Petr', id:'3'},
    {Username: 'Sveta', id:'4'},
    {Username: 'Dasha', id:'5'},
    {Username: 'Igor', id: '6'},
  ],
  messages: [
    
  ],
  newMessageBody: '',
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY: {
        let stateCopy = {...state};
        stateCopy.newMessageBody = action.body;
        return stateCopy;
      }
      case SEND_MESSAGE: {
        let stateCopy = {...state}
        let body = state.newMessageBody;
        stateCopy.newMessageBody = '';
        stateCopy.messages.push({id: 3, message: body});
        return stateCopy;
      }
      default:
        return state;
        
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessage = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
