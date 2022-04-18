import { ADD_MEMBER, CHANGE_MEMBER, DROP_MEMBER, SET_AUTH_DIALOG, SET_LOADING, SET_MEMBER, SET_MEMBERS, SET_SNACKBAR, SET_USER } from "./types"

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

        case SET_MEMBER:
            return { ...state, member: state.members.find(item => item.id === action.payload.id) }

        case ADD_MEMBER:
            return { ...state, members: state.members.concat(action.payload) }

        case CHANGE_MEMBER:
            const members = [ ...state.members ]
            const i = members.findIndex(item => item.id === action.payload.id)
            members[i] = action.payload
            return { ...state, members }

        case DROP_MEMBER:
            return { ...state, members: state.members.filter(item => item.id !== action.payload.id) }

        default:
            return state
    }
}