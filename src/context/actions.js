import { ADD_FINANCE, ADD_MEMBER, CHANGE_FINANCE, CHANGE_MEMBER, DROP_FINANCE, DROP_MEMBER, SET_AUTH_DIALOG, SET_CATEGORIES, SET_FINANCE, SET_FINANCES, SET_LOADING, SET_MEMBER, SET_MEMBERS, SET_SNACKBAR, SET_SUB_CATEGORIES, SET_USER } from "./types";

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

export const setFinances = (finances) => ({
    type: SET_FINANCES,
    payload: finances
})

export const setFinance = (id) => ({
    type: SET_FINANCE,
    payload: { id }
})

export const addFinance = (finance) => ({
    type: ADD_FINANCE,
    payload: finance
})

export const changeFinance = (finance) => ({
    type: CHANGE_FINANCE,
    payload: finance
})

export const dropFinance = (id) => ({
    type: DROP_FINANCE,
    payload: { id }
})

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
})

export const setSubCategories = (sub_categories) => ({
    type: SET_SUB_CATEGORIES,
    payload: sub_categories
})