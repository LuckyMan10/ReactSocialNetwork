import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "d15c9daa-4a26-4236-a0cd-dc848e6f790e",
    }
})

export const getUsersAPI = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response;
        });
}

export const unfollowUsersAPI = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response;
        });
}

export const followUsersAPI = (id) => {
    return instance.post(`follow/${id}`)
        .then(response => {
            return response;
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
        return response;
    })
}

export const getAuthAPI = (email, password, rememberMe) => {
    return instance.post(`auth/login`, {email, password, rememberMe})
        .then(response => {
            return response;
        })
    
}

export const getAuthSessionAPI = () => {
    return instance.get(`auth/me`)
    .then(response => {
        return response;
    })
}

export const deleteAuthSessionAPI = () => {
    return instance.delete(`auth/login`)
}
