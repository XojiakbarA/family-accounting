import { ADD_MEMBER, SET_AUTH_DIALOG, SET_LOADING, SET_MEMBERS, SET_SNACKBAR, SET_USER } from "./types"

export const reducer = (state, action) => {
    switch (action.type) {

        case SET_LOADING:
            return { ...state, loading: action.payload }

        case SET_AUTH_DIALOG:
            return { ...state, authDialog: action.payload }
    

        case SET_USER:
            return { ...state, user: action.payload }

        case SET_SNACKBAR:
            return {
                ...state,
                snackbar: {
                    open: action.payload.open,
                    text: action.payload.text,
                    color: action.payload.color
                }
            }

        case SET_MEMBERS:
            return { ...state, members: action.payload }

        case ADD_MEMBER:
            return { ...state, members: state.members.concat(action.payload) }

        default:
            return state
    }
}