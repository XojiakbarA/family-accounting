import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/'
})

export const fetchUser = async () => {
    return await instance.get('api/user')
}

export const registerUser = async (data) => {
    await instance.get('sanctum/csrf-cookie')
    return await instance.post('register', data)
}

export const loginUser = async (data) => {
    await instance.get('sanctum/csrf-cookie')
    return await instance.post('login', data)
}

export const logoutUser = async () => {
    return await instance.post('logout')
}

export const fetchMembers = async () => {
    return await instance.get('api/members')
}

export const storeMember = async (data) => {
    return await instance.post('api/members', data)
}