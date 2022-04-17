import { fetchUser, loginUser, logoutUser } from "../api"
import { setSnackbar, setUser } from "./actions"

export const getUser = async (dispatch) => {
    try {
        const res = await fetchUser()
        if (res.status === 200) {
            dispatch(setUser(res.data.data))
        }
    } catch ({ response }) {
        
    }
}

export const login = async (dispatch, data) => {
    try {
        const res = await loginUser(data)
        if (res.status === 204) {
            dispatch(setUser(res.data.data))
        }
    } catch ({ response }) {
        if (response.status === 422) {
            dispatch(setSnackbar(true, 'Incorrect email and/or password', 'error'))
        }
    }
}

export const logout = async (dispatch) => {
    try {
        const res = await logoutUser()
        if (res.status === 204) {
            dispatch(setUser(null))
        }
    } catch (e) {
        console.log(e)
    }
}