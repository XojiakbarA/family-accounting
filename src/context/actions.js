import { ADD_MEMBER, CHANGE_MEMBER, DROP_MEMBER, SET_AUTH_DIALOG, SET_LOADING, SET_MEMBER, SET_MEMBERS, SET_SNACKBAR, SET_USER } from "./types";

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

export const setMembers = (members) => ({
    type: SET_MEMBERS,
    payload: members
})

export const setMember = (id) => ({
    type: SET_MEMBER,
    payload: { id }
})

export const addMember = (member) => ({
    type: ADD_MEMBER,
    payload: member
})

export const changeMember = (member) => ({
    type: CHANGE_MEMBER,
    payload: member
})

export const dropMember = (id) => ({
    type: DROP_MEMBER,
    payload: { id }
})