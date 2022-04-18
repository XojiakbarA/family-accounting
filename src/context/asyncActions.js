import { fetchMembers, fetchUser, loginUser, logoutUser, registerUser, storeMember } from "../api"
import { addMember, setAuthDialog, setLoading, setMembers, setSnackbar, setUser } from "./actions"

export const register = async (dispatch, data, navigate, setFieldError) => {
    try {
        dispatch(setLoading(true))
        const res1 = await registerUser(data)
        const res2 = await fetchUser()
        if (res1.status === 204 && res2.status === 200) {
            dispatch(setUser(res2.data))
            dispatch(setLoading(false))
            dispatch(setAuthDialog(false))
            navigate('/dashboard')
            dispatch(setSnackbar(true, 'You are logged in!'))
        }
    } catch ({ response }) {
        if (response.status === 422) {
            dispatch(setLoading(false))
            const errors = Object.entries(response.data.errors)
            errors.forEach(item => setFieldError(item[0], item[1][0]))
        }
    }
}

export const login = async (dispatch, data, navigate) => {
    try {
        dispatch(setLoading(true))
        const res1 = await loginUser(data)
        const res2 = await fetchUser()
        if (res1.status === 204 && res2.status === 200) {
            dispatch(setUser(res2.data))
            dispatch(setLoading(false))
            dispatch(setAuthDialog(false))
            navigate('/dashboard')
            dispatch(setSnackbar(true, 'You are logged in!'))
        }
    } catch ({ response }) {
        if (response.status === 422) {
            dispatch(setLoading(false))
            dispatch(setSnackbar(true, 'Incorrect email and/or password', 'error'))
        }
    }
}

export const logout = async (dispatch, navigate, handleCloseMenu) => {
    try {
        dispatch(setLoading(true))
        const res = await logoutUser()
        if (res.status === 204) {
            dispatch(setUser(null))
            dispatch(setLoading(false))
            if (navigate) navigate('/')
            if (handleCloseMenu) handleCloseMenu()
            dispatch(setSnackbar(true, 'You are logged out!'))
        }
    } catch (e) {
        console.log(e)
    }
}

export const getMembers = async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const res = await fetchMembers()
        if (res.status === 200) {
            dispatch(setMembers(res.data.data))
            dispatch(setLoading(false))
        }
    } catch (e) {
        console.log(e)
    }
}

export const createMember = async (dispatch, data, handleCloseDialog, setFieldError) => {
    try {
        dispatch(setLoading(true))
        const res = await storeMember(data)
        if (res.status === 201) {
            dispatch(addMember(res.data.data))
            dispatch(setLoading(false))
            handleCloseDialog()
            dispatch(setSnackbar(true, 'Member created successfully!', 'success'))
        }
    } catch ({ response }) {
        if (response.status === 422) {
            dispatch(setLoading(false))
            const errors = Object.entries(response.data.errors)
            errors.forEach(item => setFieldError(item[0], item[1][0]))
        }
    }
}