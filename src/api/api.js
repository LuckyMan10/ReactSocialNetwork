import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b6dcc744-373c-44d0-bf4f-7a21cff86374",
    }
})

export const getUsersAPI = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}

export const unfollowUsersAPI = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data.resultCode;
        });
}

export const followUsersAPI = (id) => {
    return instance.post(`follow/${id}`)
        .then(response => {
            return response.data.resultCode;
        })
}

export const getUsersProfileAPI = (Id) => {
    return instance.get(`profile/` + Id)
        .then(response => {
            return response;
        })
}

export const getUserStatusAPI = (Id) => {
    return instance.get(`profile/status/` + Id)
    .then(response => {
        return response;
    })
}

export const UpdateStatusAPI = (status) => {
    return instance.put(`profile/status/`, { status: status })
    .then(response => {
        return response.data.resultCode;
    })
}

export const getAuthAPI = (email, password, rememberMe) => {
    return instance.post(`auth/login`, {email, password, rememberMe})
        .then(response => {
            return response.data;
        })
    
}

export const getAuthSessionAPI = () => {
    return instance.get(`auth/me`)
    .then(response => {
        return response.data;
    })
}

export const deleteAuthSessionAPI = () => {
    return instance.delete(`auth/login`)
}
