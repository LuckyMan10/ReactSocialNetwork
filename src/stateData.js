import reducer from "./reducer/post_reducer";
import messageReducer from "./reducer/messages_reducer"

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
export let store = {

rerender() {
  console.log('state is change')
},
_state: {
  ProfilePage: {
  PostData: [
    {userName: 'Danil', textPost: 'Сегодня прекрасный день!', like: 12, dislike: 3},
    {userName: 'Danil', textPost: 'Сегодня я пойду гулять', like: 29, dislike: 1},
    {userName: 'Danil', textPost: 'Интересно, где самая вкусная пицца?', like: 21, dislike: 5},
  ],
  inputState: '',
  },

  dialogsPage: {
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
  },
  friends_leftBlock__data: [
    {id: '1', image: 'https://clck.ru/UDyci', name: 'Igor'},
    {id: '2', image: 'https://clck.ru/VuG5v', name: 'Egor'},
    {id: '3', image: 'https://clck.ru/VuG8V', name: 'Dima'},
  ],
},
getState() {
  return this._state;
},
subscribe(observer) {
  this.rerender = observer;
},
dispatch(action) {
    this._state.ProfilePage = reducer(this._state.ProfilePage, action)
    this._state.dialogsPage = messageReducer(this._state.dialogsPage, action)
    this.rerender(this._state)
  },
};

