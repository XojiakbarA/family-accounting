import { destroyFinance, destroyMember, fetchCategories, fetchFinances, fetchMembers, fetchSubCategories, fetchUser, loginUser, logoutUser, registerUser, storeFinance, storeMember, updateFinance, updateMember } from "../api"
import { addFinance, addMember, changeFinance, changeMember, dropFinance, dropMember, setAuthDialog, setCategories, setFinances, setLoading, setMembers, setSnackbar, setSubCategories, setUser } from "./actions"

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

export const editMember = async (dispatch, id, data, handleCloseDialog, setFieldError) => {
    try {
        dispatch(setLoading(true))
        const res = await updateMember(id, data)
        if (res.status === 200) {
            dispatch(changeMember(res.data.data))
            dispatch(setLoading(false))
            handleCloseDialog()
            dispatch(setSnackbar(true, 'Member updated successfully!', 'success'))
        }
    } catch ({ response }) {
        if (response.status === 422) {
            dispatch(setLoading(false))
            const errors = Object.entries(response.data.errors)
            errors.forEach(item => setFieldError(item[0], item[1][0]))
        }
    }
}

export const deleteMember = async (dispatch, id, handleCloseDialog) => {
    try {
        dispatch(setLoading(true))
        const res = await destroyMember(id)
        if (res.status === 204) {
            dispatch(dropMember(id))
            dispatch(setLoading(false))
            handleCloseDialog()
            dispatch(setSnackbar(true, 'Member deleted successfully!', 'success'))
        }
    } catch (e) {
        console.log(e)
    }
}

export const getFinances = async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const res = await fetchFinances()
        if (res.status === 200) {
            dispatch(setFinances(res.data.data))
            dispatch(setLoading(false))
        }
    } catch (e) {
        console.log(e)
    }
}

export const createFinance = async (dispatch, data, handleCloseDialog, setFieldError) => {
    try {
        dispatch(setLoading(true))
        const res = await storeFinance(data)
        if (res.status === 201) {
            dispatch(addFinance(res.data.data))
            dispatch(setLoading(false))
            handleCloseDialog()
            dispatch(setSnackbar(true, 'Finance created successfully!', 'success'))
        }
    } catch ({ response }) {
        if (response.status === 422) {
            dispatch(setLoading(false))
            const errors = Object.entries(response.data.errors)
            errors.forEach(item => setFieldError(item[0], item[1][0]))
        }
    }
}

export const editFinance = async (dispatch, id, data, handleCloseDialog, setFieldError) => {
    try {
        dispatch(setLoading(true))
        const res = await updateFinance(id, data)
        if (res.status === 200) {
            dispatch(changeFinance(res.data.data))
            dispatch(setLoading(false))
            handleCloseDialog()
            dispatch(setSnackbar(true, 'Finance updated successfully!', 'success'))
        }
    } catch ({ response }) {
        if (response.status === 422) {
            dispatch(setLoading(false))
            const errors = Object.entries(response.data.errors)
            errors.forEach(item => setFieldError(item[0], item[1][0]))
        }
    }
}

export const deleteFinance = async (dispatch, id, handleCloseDialog) => {
    try {
        dispatch(setLoading(true))
        const res = await destroyFinance(id)
        if (res.status === 204) {
            dispatch(dropFinance(id))
            dispatch(setLoading(false))
            handleCloseDialog()
            dispatch(setSnackbar(true, 'Finance deleted successfully!', 'success'))
        }
    } catch (e) {
        console.log(e)
    }
}

export const getCategories = async (dispatch, category_id) => {
    try {
        dispatch(setLoading(true))
        const res = await fetchCategories()
        if (res.status === 200) {
            dispatch(setCategories(res.data.data))
            dispatch(setLoading(false))
        }
    } catch (e) {
        console.log(e)
    }
}

export const getSubCategories = async (dispatch, category_id) => {
    try {
        dispatch(setLoading(true))
        const res = await fetchSubCategories(category_id)
        if (res.status === 200) {
            dispatch(setSubCategories(res.data.data))
            dispatch(setLoading(false))
        }
    } catch (e) {
        console.log(e)
    }
}