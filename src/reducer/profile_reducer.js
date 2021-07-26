import {getUsersProfileAPI, getUserStatusAPI, UpdateStatusAPI} from '../api/api';


const ADD_POST = 'profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS_PROFILE = 'profile/SET_STATUS_PROFILE';


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

export const getUsersProfile = (Id) => async (dispatch) => {
    let response = await getUsersProfileAPI(Id);
    dispatch(setUserProfile(response.data))
}

export const getStatusProfile = (Id) => async (dispatch) => {
  let response = await getUserStatusAPI(Id);
    if(response.data == null) {
      dispatch(setStatusProfile("Статус пуст"))
    }
    else {
      dispatch(setStatusProfile(response.data))
    }
}

export const getUpdateStatus = (status) => async (dispatch) => {
  let response = await UpdateStatusAPI(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatusProfile(status))
    }
    else {
      alert('Ошибка!')
    }
}
