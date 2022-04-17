import { SET_AUTH_DIALOG, SET_LOADING, SET_SNACKBAR, SET_USER } from "./types";

export const setLoading = (bool) => ({
    type: SET_LOADING,
    payload: bool
})

export const setAuthDialog = (bool) => ({
    type: SET_AUTH_DIALOG,
    payload: bool
})

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const setSnackbar = (open, text, color) => ({
    type: SET_SNACKBAR,
    payload: { open, text, color }
})