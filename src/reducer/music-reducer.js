
const SEND_SEARCH = 'SEND_SEARCH';
const CHANGE_SEARCH = 'CHANGE_SEARCH';

const initialState = {
    searchMusic: '',
}

export const music_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_SEARCH: {
            
            return state;
        }
        case CHANGE_SEARCH: {
            return {...state, searchMusic: action.text}
        }
    }
    return state;
}

export const serachSend = () => ({type: SEND_SEARCH})
export const searchChange = (text) => ({type: CHANGE_SEARCH, text})