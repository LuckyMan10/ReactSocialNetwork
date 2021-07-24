import {getUsersProfileAPI, getUserStatusAPI, UpdateStatusAPI} from '../api/api';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE';


let initialState = {
  MyProfile: {
    PostData: [
      
    ],
    inputState: '',
    personalInformation: {
      name: '',
      aboutMe: '',
      Status: 'tsss',
      photo: null,
      
    },
    setFetching: false,
  }
  
}

export const reducer = (state = initialState, action) => {
    
    switch (action.type) {
      case ADD_POST: {
        let newPost = {
          userName: state.MyProfile.personalInformation.name,
          textPost: state.MyProfile.inputState,
          like: 0,
          dislike: 0,
        };
        let stateCopy = {...state};
        stateCopy.MyProfile.PostData = [...state.MyProfile.PostData];
        stateCopy.MyProfile.PostData.push(newPost);
        stateCopy.MyProfile.inputState = '';
        return stateCopy;
      }
      case UPDATE_NEW_POST_TEXT: {
        let stateCopy = {...state};
        stateCopy.MyProfile.inputState = action.newText;
        return stateCopy;
      }
      case SET_USER_PROFILE: {
        let stateCopy = {...state};
        stateCopy.MyProfile.personalInformation.name = action.data.fullName;
        stateCopy.MyProfile.personalInformation.aboutMe = action.data.aboutMe;
        stateCopy.MyProfile.personalInformation.photo = action.data.photos.small || action.data.photos.large;
        return stateCopy;
      }
      case SET_STATUS_PROFILE: {
        let stateCopy = {...state};
        stateCopy.MyProfile.personalInformation.Status = action.status;
        return stateCopy;
      }
      
      default:
        return state;
    }
}

export const addPost = () => ({type: ADD_POST})

export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setUserProfile = (data) => ({type: SET_USER_PROFILE, data});

export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status})

export const getUsersProfile = (Id) => (dispatch) => {
    getUsersProfileAPI(Id).then(response => {
      dispatch(setUserProfile(response.data))
    })
  }

export const getStatusProfile = (Id) => (dispatch) => {
  getUserStatusAPI(Id).then(response => {
    if(response.data == null) {
      dispatch(setStatusProfile("Статус пуст"))
    }
    else {
      dispatch(setStatusProfile(response.data))
    }
  })
}
export const getUpdateStatus = (status) => (dispatch) => {
  UpdateStatusAPI(status).then(resultCode => {
    if (resultCode === 0) {
      dispatch(setStatusProfile(status))
    }
    else {
      alert('Ошибка!')
    }
  })
}
