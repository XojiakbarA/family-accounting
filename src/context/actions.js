import { SET_SNACKBAR, SET_USER } from "./types";


export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const setSnackbar = (open, text, color) => ({
    type: SET_SNACKBAR,
    payload: { open, text, color }
})