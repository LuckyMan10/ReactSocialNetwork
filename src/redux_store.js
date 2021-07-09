import { combineReducers, createStore } from "redux";
import messageReducer from "./reducer/messages_reducer";
import reducer from "./reducer/post_reducer";
import friends_leftBlock_reducer from "./reducer/friends_block_reducer";

let reducers = combineReducers({
    dialogsPage: messageReducer, 
    ProfilePage: reducer,
    friends_leftBlock: friends_leftBlock_reducer,
});

let store = createStore(reducers);

export default store;