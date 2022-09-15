import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c04a4986-1e3b-48eb-b5c5-8d24bfb2ff4c"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    },
    follow(id) {
        return instance.post(`follow/${id}`);
    },
    getUserProfile(id) {
        console.warn('Obsolete method');
        return profileAPI.getUserProfile(id);
    }
}

export const followAPI = {

}

export const profileAPI = {
    getUserProfile(id) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data;
        });
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => {
            return response.data;
        });
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => {
            return response.data;
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data;
        });
    }
}