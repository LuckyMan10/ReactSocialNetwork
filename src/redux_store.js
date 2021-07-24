import { applyMiddleware, combineReducers, createStore } from "redux";
import { messageReducer } from "./reducer/messages_reducer";
import { reducer } from "./reducer/profile_reducer";
import { Users_reducer } from "./reducer/Users_reducer"
import { friends_leftBlock__data } from "./reducer/friends_block_reducer";
import { auth_reducer } from "./reducer/auth-reducer";
import { music_reducer } from "./reducer/music-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: messageReducer, 
    ProfilePage: reducer,
    friends_leftBlock: friends_leftBlock__data,
    UsersReducer: Users_reducer,
    AuthReducer: auth_reducer,
    MusicReducer: music_reducer,

});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
