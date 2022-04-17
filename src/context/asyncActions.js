import { fetchUser, loginUser, logoutUser, registerUser } from "../api"
import { setAuthDialog, setLoading, setSnackbar, setUser } from "./actions"

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