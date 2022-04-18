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

export const updateMember = async (id, data) => {
    return await instance.put(`api/members/${id}`, data)
}

export const destroyMember = async (id) => {
    return await instance.delete(`api/members/${id}`)
}

export const fetchFinances = async () => {
    return await instance.get('api/finances')
}

export const storeFinance = async (data) => {
    return await instance.post('api/finances', data)
}

export const updateFinance = async (id, data) => {
    return await instance.put(`api/finances/${id}`, data)
}

export const destroyFinance = async (id) => {
    return await instance.delete(`api/finances/${id}`)
}

export const fetchCategories = async () => {
    return await instance.get('api/categories')
}

export const fetchSubCategories = async (category_id) => {
    return await instance.get(`api/categories/${category_id}/sub-categories`)
}