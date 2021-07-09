const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
        return state;
      case SEND_MESSAGE:
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 3, message: body});
        return state;
      default:
        return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessage = (body) => 
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default messageReducer;