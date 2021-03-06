import {
    getUsersAPI,
    followUsersAPI,
    unfollowUsersAPI,
} from '../api/api';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT';
const FORTH_CHANGE = 'users/FORTH_CHANGE';
const BREAK_CHANGE = 'users/BREAK_CHANGE';
const SET_FETCHING = 'users/SET_FETCHING';
const FOLLOWING_IN_PROGRESS = 'users/FOLLOWING_IN_PROGRESS';

let initialState = {
    UsersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    firstNum: 0,
    secondNum: 5,
    isFetching: false,
    isFollowing: [],
}

export const Users_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                UsersData: state.UsersData.map(u => {
                    if (u.id == action.userId) {
                        return {
                            ...u,
                            followed: true
                        };
                    };
                    return u;
                })
            };
        };
    case UNFOLLOW: {
        return {
            ...state,
            UsersData: state.UsersData.map(u => {
                if (u.id == action.userId) {
                    return {
                        ...u,
                        followed: false
                    };
                }
                return u;
            })
        };
    };
    case SET_USERS: {
        return {
            ...state,
            UsersData: action.users
        };

    }
    case SET_CURRENT_PAGE: {
        return {
            ...state,
            currentPage: action.currentPage
        };
    }
    case SET_TOTAL_COUNT: {
        return {
            ...state,
            totalUsersCount: action.totalCount
        };
    }
    case FORTH_CHANGE: {
        let stateCopy = {
            ...state
        };
        stateCopy.firstNum = ++state.firstNum;
        stateCopy.secondNum = ++state.secondNum;
        stateCopy.currentPage = ++state.currentPage;
        return stateCopy;
    }
    case BREAK_CHANGE: {
        let stateCopy = {
            ...state
        };
        stateCopy.firstNum = --state.firstNum;
        stateCopy.secondNum = --state.secondNum;
        stateCopy.currentPage = --state.currentPage;
        return stateCopy;
    }
    case SET_FETCHING: {
        let stateCopy = {
            ...state
        };
        stateCopy.isFetching = action.FetchingValue;
        return stateCopy;
    }
    case FOLLOWING_IN_PROGRESS: {
        return {
            ...state,
            isFollowing: action.isFollow ? [...state.isFollowing, action.userId] : state.isFollowing.filter(id => id != action.userId)
        }
    }

    default:
        return state;
    }
}

export const followInProgress = (isFollow, userId) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFollow,
    userId
})
export const setFetching = (FetchingValue) => ({
    type: SET_FETCHING,
    FetchingValue
});
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const followAC = (userId) => ({
    type: FOLLOW,
    userId
});
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});
export const forthChangeAC = () => ({
    type: FORTH_CHANGE
});
export const breakChangeAC = () => ({
    type: BREAK_CHANGE
});


export const getUsers = (currentPage, pageSize) => async (dispatch) => {
        dispatch(setFetching(true));
        let response = await getUsersAPI(currentPage, pageSize);
            dispatch(setUsersAC(response.data.items));
            dispatch(setTotalCount(response.data.totalCount));
            dispatch(setFetching(false));
}

export const follow = (userId) => async (dispatch) =>{
        dispatch(followInProgress(true, userId));
        let response = await followUsersAPI(userId);
            if (response.data.resultCode === 0) {
                dispatch(followAC(userId));
            }
            dispatch(followInProgress(false, userId));
}

export const unFollow = (userId) => async (dispatch) => {
        dispatch(followInProgress(true, userId));
        let response = await unfollowUsersAPI(userId);
            if (response.data.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(followInProgress(false, userId));
    
}

