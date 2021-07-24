import {getAuthAPI, getAuthSessionAPI, deleteAuthSessionAPI} from '../api/api';

const AUTH_SEND = 'AUTH_SEND';
const LOGOUT = 'LOGOUT';
const ERROR_AUTH = 'ERROR_AUTH';
const AUTHORIZED = 'AUTHORIZED';

let initialState = {
    password: '',
    login: '',
    isAuth: false,
    error: '',
    initialized: false,
    authorized: true,
}
// c2Yw!9dPcAGQe7i
export const auth_reducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_SEND: {
        return {...state, isAuth: action.value, error: '', initialized: true}
        }
        case LOGOUT: {
            return {...state, isAuth: false, password: '', login: ''}
        }
        case ERROR_AUTH: {
            return {...state, error: action.message}
        }
        case AUTHORIZED: {
            return {...state, authorized: false}
        }
        default: {
        return state;
        }
    }
}

export const Logout = () => ({type: LOGOUT})
export const AuthSend = (value) => ({type: AUTH_SEND, value})
export const errrorAuth = (message) => ({type: ERROR_AUTH, message})
export const authorized = () => ({type: AUTHORIZED})

export const logoutSession = () => (dispatch) => {
    deleteAuthSessionAPI().then(data => {
        dispatch(Logout())
    })
}

export const getAuthSession = () => (dispatch) => {
    getAuthSessionAPI().then(data => {
        if(data.resultCode === 0) {
           dispatch(AuthSend(true))
        }
        if(data.resultCode === 1){
           dispatch(authorized())
        }
    })
}

export const getAuth = (email, password, rememberMe) => (dispatch) => {
    getAuthAPI(email, password, rememberMe).then(data => {
       if(data.resultCode === 0) {
           dispatch(AuthSend(true))
       }
       else {
           dispatch(errrorAuth(data.messages))
       }
    })
}
